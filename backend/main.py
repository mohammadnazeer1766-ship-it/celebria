from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session
import models
from database import engine, get_db
from datetime import datetime
import os
import smtplib
from email.message import EmailMessage
from twilio.rest import Client
from dotenv import load_dotenv

load_dotenv()

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Optionally add CORS middleware if frontend connects directly without proxy
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to the frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class BookingCreate(BaseModel):
    name: str
    email: str | None = None
    mobile: str
    party_date: str
    party_time: str
    product_name: str
    price: str
    pincode: str | None = ""
    status: str | None = "Pending"

class BookingUpdate(BaseModel):
    status: str

@app.get("/api/hello")
async def read_hello():
    return {"message": "Hello from the Python backend!"}

def send_email_notification(booking, customer_email):
    gmail_user = os.environ.get("GMAIL_USER")
    gmail_password = os.environ.get("GMAIL_APP_PASSWORD")
    owner_email = os.environ.get("OWNER_EMAIL")

    if not gmail_user or not gmail_password or "your_" in gmail_user:
        print("Email credentials not configured.")
        return

    msg = EmailMessage()
    msg['Subject'] = f"New Booking: {booking.product_name}"
    msg['From'] = gmail_user
    
    recipients = [customer_email]
    if owner_email and "your_" not in owner_email:
        recipients.append(owner_email)
    msg['To'] = ", ".join(recipients)
    
    msg.set_content(f"""
    Hello,
    
    A new booking has been successfully made!
    
    Details:
    Name: {booking.name}
    Mobile: {booking.mobile}
    Date: {booking.party_date}
    Time: {booking.party_time}
    Product: {booking.product_name}
    Price: ₹{booking.price}
    
    Thank you for choosing Celebria!
    """)

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(gmail_user, gmail_password)
            smtp.send_message(msg)
            print("Email notification sent successfully.")
    except Exception as e:
        print(f"Failed to send email: {e}")

def send_sms_notification(booking, customer_mobile):
    account_sid = os.environ.get("TWILIO_ACCOUNT_SID")
    auth_token = os.environ.get("TWILIO_AUTH_TOKEN")
    twilio_number = os.environ.get("TWILIO_PHONE_NUMBER")
    owner_phone = os.environ.get("OWNER_PHONE")

    if not account_sid or not auth_token or "your_" in account_sid:
        print("Twilio credentials not configured.")
        return

    try:
        client = Client(account_sid, auth_token)
        message_body = f"Celebria: New Booking confirmed for {booking.product_name} on {booking.party_date} at {booking.party_time}. Total: ₹{booking.price}"
        
        # Send to customer
        if customer_mobile:
            cust_num = customer_mobile if customer_mobile.startswith("+") else f"+91{customer_mobile}"
            client.messages.create(body=message_body, from_=twilio_number, to=cust_num)
        
        # Send to owner
        if owner_phone and "your_" not in owner_phone:
            client.messages.create(body=message_body, from_=twilio_number, to=owner_phone)
            
        print("SMS notifications sent successfully.")
    except Exception as e:
        print(f"Failed to send SMS: {e}")

@app.post("/api/book")
async def create_booking(booking: BookingCreate, db: Session = Depends(get_db)):
    db_booking = models.Booking(**booking.model_dump())
    db.add(db_booking)
    db.commit()
    db.refresh(db_booking)
    
    if booking.email:
        send_email_notification(db_booking, booking.email)
    if booking.mobile:
        send_sms_notification(db_booking, booking.mobile)
        
    return {"message": "Booking successful!", "booking": db_booking}

@app.get("/api/bookings/count")
async def get_bookings_count(db: Session = Depends(get_db)):
    count = db.query(models.Booking).count()
    return {"count": count}

@app.get("/api/bookings")
async def get_all_bookings(db: Session = Depends(get_db)):
    bookings = db.query(models.Booking).all()
    return {"bookings": bookings}

@app.put("/api/bookings/{booking_id}")
async def update_booking_status(booking_id: int, booking_update: BookingUpdate, db: Session = Depends(get_db)):
    db_booking = db.query(models.Booking).filter(models.Booking.id == booking_id).first()
    if not db_booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    
    db_booking.status = booking_update.status
    db.commit()
    db.refresh(db_booking)
    return {"message": "Status updated successfully!", "booking": db_booking}

@app.delete("/api/bookings/{booking_id}")
async def delete_booking(booking_id: int, db: Session = Depends(get_db)):
    db_booking = db.query(models.Booking).filter(models.Booking.id == booking_id).first()
    if not db_booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    
    db.delete(db_booking)
    db.commit()
    return {"message": "Booking deleted successfully!"}

@app.delete("/api/bookings/cleanup/expired")
async def delete_expired_bookings(db: Session = Depends(get_db)):
    bookings = db.query(models.Booking).all()
    deleted_count = 0
    today = datetime.now().date()
    
    for booking in bookings:
        try:
            # Assuming format is YYYY-MM-DD
            party_date = datetime.strptime(booking.party_date, "%Y-%m-%d").date()
            if party_date < today:
                db.delete(booking)
                deleted_count += 1
        except ValueError:
            # Skip if date format is invalid or missing
            continue
            
    if deleted_count > 0:
        db.commit()
        
    return {"message": f"Deleted {deleted_count} expired bookings"}

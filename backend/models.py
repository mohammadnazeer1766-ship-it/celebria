from sqlalchemy import Column, Integer, String
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True)
    email = Column(String(100), unique=True, index=True)

class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(100), nullable=True)
    mobile = Column(String(20))
    party_date = Column(String(50))
    party_time = Column(String(50))
    product_name = Column(String(255))
    price = Column(String(50))
    pincode = Column(String(20), default="")
    status = Column(String(50), default="Pending")

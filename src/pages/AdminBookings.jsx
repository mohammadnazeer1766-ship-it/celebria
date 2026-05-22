import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Trash, RefreshCw } from 'lucide-react';

const AdminBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchBookings = async () => {
        try {
            const response = await fetch('/api/bookings');
            if (!response.ok) {
                throw new Error('Failed to fetch bookings');
            }
            const data = await response.json();
            setBookings(data.bookings);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const handleStatusChange = async (id, newStatus) => {
        try {
            const response = await fetch(`/api/bookings/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
            if (response.ok) {
                setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
            } else {
                alert('Failed to update status');
            }
        } catch (err) {
            console.error('Error updating status:', err);
            alert('Error updating status');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this booking?')) return;
        try {
            const response = await fetch(`/api/bookings/${id}`, { method: 'DELETE' });
            if (response.ok) {
                setBookings(bookings.filter(b => b.id !== id));
            } else {
                alert('Failed to delete booking');
            }
        } catch (err) {
            console.error('Error deleting booking:', err);
            alert('Error deleting booking');
        }
    };

    const handleCleanExpired = async () => {
        if (!window.confirm('Are you sure you want to delete all expired bookings?')) return;
        try {
            const response = await fetch('/api/bookings/cleanup/expired', { method: 'DELETE' });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                fetchBookings();
            } else {
                alert('Failed to delete expired bookings');
            }
        } catch (err) {
            console.error('Error deleting expired bookings:', err);
            alert('Error deleting expired bookings');
        }
    };

    if (loading) {
        return (
            <div className="pt-24 min-h-screen flex items-center justify-center">
                <p className="text-xl font-bold">Loading bookings...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="pt-24 min-h-screen flex items-center justify-center">
                <p className="text-xl font-bold text-red-500">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen px-4 md:px-8 max-w-7xl mx-auto pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden"
            >
                <div className="p-8 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
                        <p className="text-gray-500 mt-2">Manage your decoration bookings</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleCleanExpired}
                            className="bg-red-100 text-red-700 hover:bg-red-200 font-bold py-2 px-4 rounded-xl flex items-center gap-2 transition-colors"
                        >
                            <Trash className="w-4 h-4" />
                            Delete Expired
                        </button>
                        <div className="bg-blue-100 text-blue-700 font-bold py-2 px-4 rounded-xl">
                            Total: {bookings.length}
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                                <th className="p-4 font-bold">ID</th>
                                <th className="p-4 font-bold">Customer Name</th>
                                <th className="p-4 font-bold">Mobile No.</th>
                                <th className="p-4 font-bold">Date</th>
                                <th className="p-4 font-bold">Time</th>
                                <th className="p-4 font-bold">Decoration</th>
                                <th className="p-4 font-bold">Status</th>
                                <th className="p-4 font-bold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.length === 0 ? (
                                <tr>
                                    <td colSpan="8" className="p-8 text-center text-gray-500 font-medium">
                                        No bookings found.
                                    </td>
                                </tr>
                            ) : (
                                bookings.map((booking) => (
                                    <tr key={booking.id} className="border-b border-gray-50 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                        <td className="p-4 font-medium text-gray-900 dark:text-white">#{booking.id}</td>
                                        <td className="p-4 font-bold">{booking.name}</td>
                                        <td className="p-4">{booking.mobile}</td>
                                        <td className="p-4">{booking.party_date}</td>
                                        <td className="p-4">{booking.party_time}</td>
                                        <td className="p-4 text-blue-600 dark:text-blue-400 font-medium">{booking.product_name}</td>
                                        <td className="p-4">
                                            <select
                                                value={booking.status || 'Pending'}
                                                onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                                                className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm font-medium outline-none focus:border-blue-500"
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="Confirmed">Confirmed</option>
                                                <option value="Completed">Completed</option>
                                                <option value="Cancelled">Cancelled</option>
                                            </select>
                                        </td>
                                        <td className="p-4 text-right">
                                            <button
                                                onClick={() => handleDelete(booking.id)}
                                                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                                                title="Delete Booking"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminBookings;

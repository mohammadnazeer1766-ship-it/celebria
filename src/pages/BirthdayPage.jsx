import React from 'react';
import { Link } from 'react-router-dom';
import { birthdayDecorations } from '../data/mockData';
import BookingDetailsModal from '../components/BookingDetailsModal';

const BirthdayPage = () => {
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen pb-20 pt-8 transition-colors duration-300">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl md:text-3xl font-medium text-center text-gray-800 dark:text-gray-100 mb-8">
                    Birthday Decoration Services in Hyderabad
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {birthdayDecorations.map((theme) => (
                        <div
                            key={theme.id}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden group flex flex-col"
                        >
                            {/* Image Container with Badge */}
                            <div className="aspect-[4/3] w-full overflow-hidden relative">
                                <img
                                    src={theme.image}
                                    alt={theme.title}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                                {theme.discountPercentage && (
                                    <div className="absolute bottom-3 right-3 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-[10px] font-bold text-gray-700 dark:text-gray-200 shadow-sm">
                                        {theme.discountPercentage}% OFF
                                    </div>
                                )}
                            </div>

                            {/* Details Container */}
                            <div className="p-4">
                                <h3 className="text-gray-700 dark:text-gray-300 font-medium text-base mb-3">
                                    {theme.title}
                                </h3>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-900 dark:text-white font-bold text-lg">
                                                ₹{theme.price}
                                            </span>
                                            {theme.originalPrice && (
                                                <span className="text-gray-400 dark:text-gray-500 text-xs line-through">
                                                    ₹{theme.originalPrice}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => {
                                            setSelectedProduct(theme);
                                            setIsModalOpen(true);
                                        }}
                                        className="bg-[#f05a5a] hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>


            {/* Booking Details Modal */}
            <BookingDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={selectedProduct}
            />
        </div>
    );
};

export default BirthdayPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { toysAndGifts } from '../data/mockData';
import BookingDetailsModal from '../components/BookingDetailsModal';
import FunkyBackground from '../components/FunkyBackground';

const ToysAndGiftsPage = () => {
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <div className="relative min-h-screen pb-20 pt-8 transition-colors duration-300 overflow-hidden">
            <FunkyBackground />
            <div className="container mx-auto px-4 py-8 relative z-10">
                <h1 className="text-2xl md:text-3xl font-black text-center text-gray-900 dark:text-white mb-8 drop-shadow-md">
                    Toys and Gifts Delivery in Hyderabad
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {toysAndGifts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden group flex flex-col"
                        >
                            {/* Image Container with Badge */}
                            <div className="aspect-[4/3] w-full overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                                {product.discountPercentage && (
                                    <div className="absolute bottom-3 right-3 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-[10px] font-bold text-gray-700 dark:text-gray-200 shadow-sm">
                                        {product.discountPercentage}% OFF
                                    </div>
                                )}
                            </div>

                            {/* Details Container */}
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-gray-700 dark:text-gray-300 font-medium text-base mb-3">
                                    {product.title}
                                </h3>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-900 dark:text-white font-bold text-lg">
                                                ₹{product.price}
                                            </span>
                                            {product.originalPrice && (
                                                <span className="text-gray-400 dark:text-gray-500 text-xs line-through">
                                                    ₹{product.originalPrice}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => {
                                            setSelectedProduct(product);
                                            setIsModalOpen(true);
                                        }}
                                        className="bg-[#f05a5a] hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors"
                                    >
                                        Order Now
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

export default ToysAndGiftsPage;

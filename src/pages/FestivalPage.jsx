import React from 'react';
import { Link } from 'react-router-dom';
import { festivalDecorations } from '../data/mockData';
import FunkyBackground from '../components/FunkyBackground';

const FestivalPage = () => {
    return (
        <div className="relative min-h-screen pb-20 pt-8 transition-colors duration-300 overflow-hidden">
            <FunkyBackground />
            <div className="container mx-auto px-4 py-8 relative z-10">
                <h1 className="text-2xl md:text-3xl font-black text-center text-gray-900 dark:text-white mb-8 drop-shadow-md">
                    Festival Decoration Services in Hyderabad
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {festivalDecorations.map((item) => (
                        <Link
                            to={item.products ? `/festival/${item.id}` : '#'}
                            key={item.id}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden group flex flex-col cursor-pointer transition-transform hover:scale-[1.02]"
                        >
                            {/* Image Container with Badge */}
                            <div className="aspect-[4/3] w-full overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                                {item.discountPercentage && (
                                    <div className="absolute bottom-3 right-3 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-[10px] font-bold text-gray-700 dark:text-gray-200 shadow-sm">
                                        {item.discountPercentage}% OFF
                                    </div>
                                )}
                            </div>

                            {/* Details Container */}
                            <div className="p-4">
                                <h3 className="text-gray-700 dark:text-gray-300 font-medium text-base mb-3">
                                    {item.title}
                                </h3>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-900 dark:text-white font-bold text-lg">
                                                ₹{item.price}
                                            </span>
                                            {item.originalPrice && (
                                                <span className="text-gray-400 dark:text-gray-500 text-xs line-through">
                                                    ₹{item.originalPrice}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <button className="bg-[#f05a5a] hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors">
                                        {item.products ? 'View All' : 'Book Now'}
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default FestivalPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { decorationCategories } from '../data/mockData';

const DecorationsPage = () => {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen pb-20 pt-12 transition-colors duration-300">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl md:text-3xl font-medium text-center text-gray-800 dark:text-gray-100 mb-12">
                    Event Decoration Services for All Your Events in Hyderabad
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {decorationCategories.map((category) => (
                        <Link
                            to={`/decorations/${category.id}`}
                            key={category.id}
                            className="relative group cursor-pointer"
                        >
                            <div className="aspect-square w-full overflow-hidden rounded-3xl shadow-lg relative group-hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Bottom label overlay - matching PartyOne style exactly */}
                                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[85%]">
                                    <div className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl border border-white/20 text-center transition-all duration-300 group-hover:bg-red-600">
                                        <span className="text-gray-800 font-semibold text-base md:text-lg leading-tight block transition-colors duration-300 group-hover:text-white">
                                            {category.title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default DecorationsPage;

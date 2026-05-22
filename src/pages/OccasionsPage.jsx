import React from 'react';
import { Link } from 'react-router-dom';
import { occasionsDecorations } from '../data/mockData';
import FunkyBackground from '../components/FunkyBackground';

const OccasionsPage = () => {
    return (
        <div className="relative min-h-screen pb-20 pt-8 transition-colors duration-300 overflow-hidden">
            <FunkyBackground />
            <div className="container mx-auto px-4 py-8 relative z-10">
                <h1 className="text-2xl md:text-3xl font-black text-center text-gray-900 dark:text-white mb-8 drop-shadow-md">
                    Special Occasions Decoration Services in Hyderabad
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {occasionsDecorations.map((category) => (
                        <Link
                            to={`/occasions/${category.id}`}
                            key={category.id}
                            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="aspect-[4/3] w-full overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4 flex justify-center">
                                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm text-center min-w-[80%]">
                                    <span className="text-gray-800 dark:text-gray-200 font-medium text-sm md:text-base whitespace-normal leading-tight block">
                                        {category.title}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default OccasionsPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { decorationCategories } from '../data/mockData';
import { MessageCircle, Phone } from 'lucide-react';

const Home = () => {
    // We can filter which categories to show or just show all
    const categories = decorationCategories;

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen pb-20 transition-colors duration-300">

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl md:text-3xl font-medium text-center text-gray-800 dark:text-gray-200 mb-8">
                    Event Decoration Services for All Your Events in Hyderabad
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link
                            to={`/decorations/${category.id}`}
                            key={category.id}
                            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/3] w-full overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Label Pill */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4 flex justify-center">
                                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm text-center min-w-[80%] transition-all duration-300 group-hover:bg-red-600">
                                    <span className="text-gray-800 font-medium text-sm md:text-base whitespace-normal leading-tight block transition-colors duration-300 group-hover:text-white">
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

export default Home;

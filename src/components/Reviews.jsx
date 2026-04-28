import React from 'react';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../data/mockData';

const Reviews = () => {
    return (
        <section className="py-20 bg-primary/5 dark:bg-primary/10 relative overflow-hidden transition-colors duration-300" id="reviews">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 dark:opacity-20 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary blur-3xl"></div>
                <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-secondary blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mt-2 mb-4">Happy Parents & Kids</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our customers have to say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col transition-colors">
                            <div className="mb-4 text-primary">
                                <Quote className="w-10 h-10 opacity-20" />
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 italic flex-grow">"{review.comment}"</p>

                            <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100">{review.name}</h4>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">{review.city}</span>
                                </div>
                                <div className="flex bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;

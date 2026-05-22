import React from 'react';
import { Check, Star } from 'lucide-react';
import { pricing } from '../data/mockData';

const Pricing = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" id="pricing">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Packages</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mt-2 mb-4">Choose Your Character</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Transparent pricing with no hidden fees. Select the perfect package for your event.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricing.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${index === 1 ? 'border-2 border-primary shadow-xl scale-105 z-10' : 'border border-gray-100 dark:border-gray-700 shadow-md'}`}
                        >
                            {index === 1 && (
                                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}
                            <div className="p-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <Star className={`w-5 h-5 ${index === 1 ? 'text-secondary font-fill' : 'text-gray-300'}`} fill={index === 1 ? "currentColor" : "none"} />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{plan.character}</h3>
                                </div>

                                <div className="flex items-baseline mb-2">
                                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                                    <span className="text-gray-500 dark:text-gray-400 ml-2">/ event</span>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium bg-gray-50 dark:bg-gray-700 inline-block px-3 py-1 rounded-full">{plan.duration}</p>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all ${index === 1
                                    ? 'bg-primary text-white hover:bg-pink-600 shadow-lg hover:shadow-primary/30'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}>
                                    Book {plan.character}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;

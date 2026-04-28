import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faq } from '../data/mockData';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" id="faq">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">FAQ</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mt-2 mb-4">Common Questions</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Find answers to commonly asked questions about our services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faq.map((item, index) => (
                        <div
                            key={item.id}
                            className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'}`}
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className={`text-lg font-medium text-left ${openIndex === index ? 'text-primary' : 'text-gray-800 dark:text-gray-200'}`}>
                                    {item.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-primary shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-400 shrink-0" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

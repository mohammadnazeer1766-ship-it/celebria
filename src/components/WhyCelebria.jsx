import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, ThumbsUp, CreditCard } from 'lucide-react';

const WhyCelebria = () => {
    const reasons = [
        {
            icon: <ThumbsUp className="w-8 h-8" />,
            title: "Top Rated Service",
            desc: "Consistently rated 4.9/5 by thousands of happy customers in Hyderabad.",
            color: "bg-blue-500",
            lightColor: "bg-blue-50 dark:bg-blue-900/20"
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Professional Decorators",
            desc: "Our team is background-verified, trained, and extremely punctual.",
            color: "bg-green-500",
            lightColor: "bg-green-50 dark:bg-green-900/20"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "On-Time Setup",
            desc: "We value your time. Our decorators arrive and finish exactly when promised.",
            color: "bg-purple-500",
            lightColor: "bg-purple-50 dark:bg-purple-900/20"
        },
        {
            icon: <CreditCard className="w-8 h-8" />,
            title: "Transparent Pricing",
            desc: "No hidden fees. What you see is exactly what you pay for the package.",
            color: "bg-orange-500",
            lightColor: "bg-orange-50 dark:bg-orange-900/20"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-white dark:bg-gray-900">
            {/* Funky Background Pattern & Blobs */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900 z-0" />
            
            {/* Animated Blobs */}
            <motion.div 
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-200/50 dark:bg-pink-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0" 
            />
            <motion.div 
                animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-200/50 dark:bg-blue-900/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 z-0" 
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                        Why Choose <span className="text-pink-500">Celebria?</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                        We take the stress out of event planning so you can focus on making memories. Here's why Hyderabad loves us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            className={`p-8 rounded-3xl border border-white/60 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl relative overflow-hidden`}
                        >
                            {/* Subtle background color hint inside the card */}
                            <div className={`absolute inset-0 opacity-10 dark:opacity-5 ${reason.color}`} />
                            
                            <div className="relative z-10">
                                <div className={`${reason.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                                    {reason.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyCelebria;

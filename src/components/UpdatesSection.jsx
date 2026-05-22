import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, LayoutDashboard, Zap, Smartphone } from 'lucide-react';

const UpdatesSection = () => {
    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Dark/Funky Tech Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-blue-600 to-cyan-400 blur-[150px] mix-blend-screen" />
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-pink-600 to-purple-500 blur-[150px] mix-blend-screen" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 font-bold mb-4 border border-blue-500/30">
                        <Sparkles className="w-4 h-4" />
                        <span>Celebria V2.0 is Here!</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        An Updated Version <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Built For You.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
                    >
                        <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6">
                            <LayoutDashboard className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Admin Dashboard</h3>
                        <p className="text-gray-400 font-medium">Complete control over bookings, real-time analytics, and seamless order management built directly into the new platform.</p>
                    </motion.div>

                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
                    >
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6">
                            <Zap className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Lightning Fast</h3>
                        <p className="text-gray-400 font-medium">Rebuilt from the ground up for maximum performance. Browse decorations and checkout in milliseconds.</p>
                    </motion.div>

                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
                    >
                        <div className="bg-gradient-to-br from-orange-500 to-red-500 w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6">
                            <Smartphone className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Mobile First</h3>
                        <p className="text-gray-400 font-medium">A completely responsive design that looks and feels like a native app on your phone, making booking on-the-go a breeze.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default UpdatesSection;

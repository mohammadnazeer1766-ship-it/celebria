import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Users } from 'lucide-react';

const AboutCelebria = () => {
    // Array to generate multiple 3D balloons with different colors
    const balloonColors = [
        { main: '#ff4757', shadow: '#ff1e34' }, // Red
        { main: '#1e90ff', shadow: '#0066cc' }, // Blue
        { main: '#2ed573', shadow: '#1bad50' }, // Green
        { main: '#ffa502', shadow: '#cc8400' }, // Orange
        { main: '#9c88ff', shadow: '#7158e2' }, // Purple
        { main: '#ff6b81', shadow: '#ff4757' }, // Pink
    ];

    return (
        <section className="py-20 relative overflow-hidden bg-white dark:bg-gray-900">
            {/* Funky Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-yellow-50 to-purple-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/10 z-0" />
            
            {/* Falling Custom CSS 3D Balloons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[...Array(20)].map((_, i) => {
                    const color = balloonColors[i % balloonColors.length];
                    const size = Math.random() * 50 + 40; // Size between 40px and 90px
                    return (
                        <motion.div
                            key={`falling-balloon-${i}`}
                            className="absolute drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)]"
                            style={{
                                left: Math.random() * 100 + '%',
                                top: '-20%', // Start above the screen
                            }}
                            animate={{
                                y: ['-20vh', '120vh'], // Fall down past the screen
                                x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50], // Swaying motion
                                rotate: [Math.random() * -15 - 5, Math.random() * 15 + 5],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: 'linear', // Linear so they fall continuously
                                delay: Math.random() * 5,
                            }}
                        >
                            {/* The 3D Balloon Shape - rotated to look like it's falling or floating downwards */}
                            <div 
                                style={{
                                    width: `${size}px`,
                                    height: `${size * 1.25}px`,
                                    background: `radial-gradient(circle at 35% 35%, #ffffff 0%, ${color.main} 20%, ${color.shadow} 100%)`,
                                    borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
                                    boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.2)',
                                    position: 'relative'
                                }}
                            >
                                {/* Balloon Tie */}
                                <div 
                                    className="absolute"
                                    style={{
                                        top: '-8px', // Move tie to the top to look like it's falling upside down/tied top? No, balloons fall string up.
                                        left: '50%',
                                        transform: 'translateX(-50%) rotate(180deg)',
                                        borderLeft: '6px solid transparent',
                                        borderRight: '6px solid transparent',
                                        borderBottom: `8px solid ${color.shadow}`,
                                    }}
                                />
                                {/* Balloon String */}
                                <div 
                                    className="absolute border-l-2 border-dashed border-gray-400/50"
                                    style={{
                                        top: '-50px',
                                        left: '50%',
                                        height: '50px',
                                        transform: 'translateX(-50%) rotate(-5deg)',
                                    }}
                                />
                            </div>
                        </motion.div>
                    );
                })}

                {/* Splashes / Confetti falling down */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={`splash-${i}`}
                        className={`absolute w-3 h-8 rounded-full shadow-sm ${i % 2 === 0 ? 'bg-yellow-400' : i % 3 === 0 ? 'bg-pink-400' : 'bg-blue-400'}`}
                        style={{
                            left: Math.random() * 100 + '%',
                            top: '-10%',
                        }}
                        animate={{
                            y: ['-10vh', '120vh'],
                            x: [0, Math.random() * 100 - 50],
                            rotateX: [0, 720],
                            rotateY: [0, 720],
                            rotateZ: [0, 720],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: Math.random() * 4,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800" 
                                alt="Birthday Decoration Celebration" 
                                className="rounded-[2rem] shadow-[0_20px_50px_rgba(236,72,153,0.3)] border-4 border-pink-200 dark:border-pink-900/50 object-cover w-full h-[400px]"
                            />
                            {/* Floating Stats Card */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -right-10 bg-white/90 backdrop-blur-xl dark:bg-gray-800/90 p-6 rounded-3xl shadow-xl border border-pink-100 dark:border-pink-900/50 max-w-xs hidden md:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center shadow-inner">
                                        <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-gray-900 dark:text-white">10,000+</h4>
                                        <p className="text-sm font-medium text-gray-500">Happy Celebrations</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                        
                        {/* Background Decorative Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-pink-300 to-yellow-300 dark:from-pink-900/40 dark:to-yellow-900/40 rounded-full blur-3xl -z-10 opacity-60" />
                    </div>

                    {/* Text Side */}
                    <div className="lg:w-1/2 bg-white/60 dark:bg-gray-900/60 p-8 rounded-3xl backdrop-blur-md border border-white/50 dark:border-gray-800 shadow-xl">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-pink-500 font-black tracking-wider uppercase text-sm mb-3">About Celebria</h3>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                                We Don't Just Decorate, <br/> We Create Memories.
                            </h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 font-medium leading-relaxed">
                                Celebria was born out of a simple idea: every milestone deserves to be celebrated in style. We are a team of passionate designers, planners, and creators dedicated to turning your ordinary spaces into extraordinary experiences.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 p-3 rounded-xl text-purple-600 shadow-sm border border-white/50">
                                        <Star className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">Premium Quality</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Finest balloons and props.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/50 dark:to-yellow-900/50 p-3 rounded-xl text-orange-600 shadow-sm border border-white/50">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">Expert Team</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Trained professionals.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black px-8 py-4 rounded-xl hover:shadow-[0_10px_20px_rgba(236,72,153,0.4)] transition-all shadow-lg transform hover:-translate-y-1">
                                Read Our Story
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCelebria;

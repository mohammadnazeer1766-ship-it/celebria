import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gift, PartyPopper } from 'lucide-react';

const HeroHome = () => {
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
        <div className="relative overflow-hidden min-h-screen flex items-center justify-center pt-20 pb-12 bg-gray-900">
            {/* Funky 3D Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff9a9e] via-[#fecfef] to-[#a1c4fd] z-0 opacity-80 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-0 opacity-90" />

            {/* Custom CSS 3D Floating Balloons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[...Array(25)].map((_, i) => {
                    const color = balloonColors[i % balloonColors.length];
                    const size = Math.random() * 80 + 60; // Random size between 60px and 140px
                    return (
                        <motion.div
                            key={`balloon-${i}`}
                            className="absolute drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
                            style={{
                                left: Math.random() * 100 + '%',
                                bottom: '-20%',
                            }}
                            animate={{
                                y: ['0vh', '-120vh'],
                                x: [0, Math.random() * 150 - 75, Math.random() * 150 - 75],
                                rotate: [Math.random() * -15 - 5, Math.random() * 15 + 5],
                            }}
                            transition={{
                                duration: Math.random() * 8 + 8,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: Math.random() * 5,
                            }}
                        >
                            {/* The 3D Balloon Shape */}
                            <div 
                                style={{
                                    width: `${size}px`,
                                    height: `${size * 1.25}px`,
                                    background: `radial-gradient(circle at 35% 35%, #ffffff 0%, ${color.main} 20%, ${color.shadow} 100%)`,
                                    borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
                                    boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.3)',
                                    position: 'relative'
                                }}
                            >
                                {/* Balloon Tie */}
                                <div 
                                    className="absolute"
                                    style={{
                                        bottom: '-8px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        borderLeft: '8px solid transparent',
                                        borderRight: '8px solid transparent',
                                        borderBottom: `10px solid ${color.shadow}`,
                                    }}
                                />
                                {/* Balloon String */}
                                <div 
                                    className="absolute border-l-2 border-dashed border-gray-400/50"
                                    style={{
                                        bottom: '-60px',
                                        left: '50%',
                                        height: '60px',
                                        transform: 'translateX(-50%) rotate(5deg)',
                                    }}
                                />
                            </div>
                        </motion.div>
                    );
                })}

                {/* 3D Confetti/Splashes */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={`confetti-${i}`}
                        className={`absolute w-4 h-8 rounded-full shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.3)] ${i % 2 === 0 ? 'bg-yellow-400' : i % 3 === 0 ? 'bg-cyan-400' : 'bg-pink-500'}`}
                        style={{
                            left: Math.random() * 100 + '%',
                            top: '-10%',
                        }}
                        animate={{
                            y: ['0vh', '120vh'],
                            x: [0, Math.random() * 100 - 50],
                            rotateX: [0, 720],
                            rotateY: [0, 720],
                            rotateZ: [0, 720],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 4,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 z-10 relative text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.5 }}
                    className="max-w-5xl mx-auto bg-black/30 p-8 md:p-14 rounded-[3rem] backdrop-blur-xl border-2 border-white/30 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                >
                    <motion.div 
                        animate={{ y: [0, -10, 0] }} 
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-purple-900 font-black mb-8 shadow-[0_0_30px_rgba(250,204,21,0.6)] border-2 border-yellow-200"
                    >
                        <Sparkles className="w-5 h-5" />
                        <span>Welcome to the Ultimate Party!</span>
                        <PartyPopper className="w-5 h-5" />
                    </motion.div>
                    
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] tracking-tight">
                        Make Your Special <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300 filter drop-shadow-md">
                            Moments Magical!
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-3xl text-gray-200 mb-10 max-w-3xl mx-auto font-bold drop-shadow-xl leading-relaxed">
                        Premium, hassle-free decorations delivered right to your doorstep. The fun starts here!
                    </p>
                    
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <button className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-white font-black text-2xl px-12 py-6 rounded-full shadow-[0_15px_40px_rgba(250,204,21,0.6)] hover:shadow-[0_20px_60px_rgba(236,72,153,0.8)] transition-all flex items-center gap-4 border-4 border-white/50 group">
                            <Gift className="w-8 h-8 group-hover:animate-bounce" />
                            Explore Packages Now!
                        </button>
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Funky Bottom Shape Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg className="relative block w-full h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C52.16,93.42,103.48,86.1,154.4,76.69,209.63,66.5,265.41,66.86,321.39,56.44Z" className="fill-white dark:fill-gray-900"></path>
                </svg>
            </div>
        </div>
    );
};

export default HeroHome;

import React from 'react';
import { motion } from 'framer-motion';

const FunkyBackground = () => {
    // 3D Shiny Balloon Colors matching the image (Purple, Pink, Cyan, Orange, Red, Blue)
    const balloonColors = [
        { shine: '#ffffff', highlight: '#f093fb', main: '#f5576c', shadow: '#900020' }, // Pink
        { shine: '#ffffff', highlight: '#5ee7df', main: '#b490ca', shadow: '#4a2c6d' }, // Purple
        { shine: '#ffffff', highlight: '#8fd3f4', main: '#00c6fb', shadow: '#005ea3' }, // Cyan
        { shine: '#ffffff', highlight: '#f6d365', main: '#fda085', shadow: '#b34222' }, // Orange/Peach
        { shine: '#ffffff', highlight: '#e0c3fc', main: '#8ec5fc', shadow: '#3b6a9e' }, // Soft Blue
        { shine: '#ffffff', highlight: '#ff9a9e', main: '#fecfef', shadow: '#a95a82' }, // Light Pink
    ];

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] perspective-[1000px]">
            {/* The 3D Room / Environment Background */}
            <motion.div 
                className="absolute inset-0 z-0"
                style={{
                    background: 'radial-gradient(circle at 50% 30%, #ffecd2 0%, #fcb69f 30%, #a18cd1 70%, #4a2c6d 100%)',
                    backgroundSize: '150% 150%'
                }}
                animate={{
                    backgroundPosition: ['50% 0%', '50% 100%', '50% 0%'],
                }}
                transition={{
                    duration: 20,
                    ease: "easeInOut",
                    repeat: Infinity
                }}
            />
            
            {/* Soft overlay to ensure readability */}
            <div className="absolute inset-0 bg-gray-900/10 dark:bg-gray-900/60 z-0 backdrop-blur-[1px]" />

            {/* Render realistic 3D moving balloons */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-10" style={{ transformStyle: 'preserve-3d' }}>
                {[...Array(30)].map((_, i) => {
                    const color = balloonColors[i % balloonColors.length];
                    const size = Math.random() * 80 + 60; // 60px to 140px
                    const startZ = Math.random() * 400 - 200; // 3D depth
                    
                    return (
                        <motion.div
                            key={`shiny-balloon-${i}`}
                            className="absolute drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
                            style={{
                                left: Math.random() * 100 + '%',
                                top: '-20%',
                                zZ: startZ, // Fake z-index via scale later
                            }}
                            animate={{
                                y: ['-20vh', '120vh'],
                                x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100],
                                rotate: [Math.random() * -20 - 10, Math.random() * 20 + 10],
                                scale: [1 + (startZ/1000), 1.2 + (startZ/1000), 1 + (startZ/1000)] // Creates a 3D breathing/moving effect
                            }}
                            transition={{
                                duration: Math.random() * 12 + 10, // Slower, elegant floating
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: Math.random() * 15,
                            }}
                        >
                            {/* Realistic 3D Balloon Shape with high gloss */}
                            <div 
                                style={{
                                    width: `${size}px`,
                                    height: `${size * 1.2}px`,
                                    background: `radial-gradient(circle at 25% 25%, ${color.shine} 0%, ${color.highlight} 15%, ${color.main} 50%, ${color.shadow} 100%)`,
                                    borderRadius: '50% 50% 50% 50% / 45% 45% 55% 55%',
                                    boxShadow: `inset -15px -15px 25px rgba(0,0,0,0.4), inset 10px 10px 20px rgba(255,255,255,0.4), 0 20px 30px rgba(0,0,0,0.3)`,
                                    position: 'relative',
                                    transformStyle: 'preserve-3d'
                                }}
                            >
                                {/* Balloon Tie */}
                                <div 
                                    className="absolute"
                                    style={{
                                        bottom: '-12px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        borderLeft: '10px solid transparent',
                                        borderRight: '10px solid transparent',
                                        borderBottom: `14px solid ${color.shadow}`,
                                        filter: 'drop-shadow(0 5px 5px rgba(0,0,0,0.2))'
                                    }}
                                />
                                {/* Curly Ribbon / String */}
                                <svg 
                                    className="absolute overflow-visible" 
                                    style={{
                                        bottom: '-80px',
                                        left: '50%',
                                        width: '40px',
                                        height: '80px',
                                        transform: 'translateX(-50%)',
                                        opacity: 0.7
                                    }}
                                    viewBox="0 0 20 80"
                                >
                                    <motion.path 
                                        d="M10,0 Q20,15 10,30 T10,60 T10,80" 
                                        fill="none" 
                                        stroke="#f0cd60" 
                                        strokeWidth="2"
                                        animate={{ d: ["M10,0 Q20,15 10,30 T10,60 T10,80", "M10,0 Q0,15 10,30 T10,60 T10,80"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </svg>
                            </div>
                        </motion.div>
                    );
                })}

                {/* 3D Falling Confetti & Stars */}
                {[...Array(50)].map((_, i) => {
                    const isStar = i % 5 === 0;
                    return (
                        <motion.div
                            key={`confetti-${i}`}
                            className={`absolute shadow-lg ${
                                isStar ? '' : 
                                i % 3 === 0 ? 'bg-[#f5576c]' : i % 3 === 1 ? 'bg-[#00c6fb]' : 'bg-[#f6d365]'
                            }`}
                            style={{
                                left: Math.random() * 100 + '%',
                                top: '-10%',
                                width: isStar ? '0px' : Math.random() * 10 + 5 + 'px',
                                height: isStar ? '0px' : Math.random() * 15 + 10 + 'px',
                                borderRadius: isStar ? '0' : '2px',
                            }}
                            animate={{
                                y: ['-10vh', '120vh'],
                                x: [0, Math.random() * 300 - 150],
                                rotateX: [0, 1080],
                                rotateY: [0, 1080],
                                rotateZ: [0, 1080],
                            }}
                            transition={{
                                duration: Math.random() * 6 + 6,
                                repeat: Infinity,
                                ease: 'linear',
                                delay: Math.random() * 10,
                            }}
                        >
                            {isStar && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400 drop-shadow-md">
                                    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" fill="currentColor"/>
                                </svg>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default FunkyBackground;

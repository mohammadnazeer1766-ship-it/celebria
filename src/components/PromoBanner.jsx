import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Gift, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import BookingDetailsModal from './BookingDetailsModal';
import { birthdayDecorations, decorationCategories, corporateDecorations } from '../data/mockData';
import confettiImage from '../assets/confetti.png';

const ads = [
    {
        id: 1,
        title: "Exclusive Birthday Deal!",
        subtitle: "GET 50% OFF ON PREMIUM BALLOON DECOR",
        description: "Transform your first birthday celebration with our premium pastel balloon arc. Limited time offer!",
        image: confettiImage,
        color: "bg-celebration-red",
        accent: "text-celebration-yellow",
        link: "/birthday",
        product: birthdayDecorations[0]
    },
    {
        id: 2,
        title: "Romantic Anniversary Setup",
        subtitle: "UPGRADE TO LUXURY CANDLELIGHT DINNER",
        description: "Surprise your partner with a dreamy setup including rose petals, fairy lights, and a customized backdrop.",
        image: "https://tse4.mm.bing.net/th/id/OIP.d9NEbsyUfR3tEm_D4DXm2AHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        color: "bg-celebration-blue",
        accent: "text-celebration-pink",
        link: "/dinners",
        product: decorationCategories[0].products[3] // Luxury Anniversary Heart Setup
    },
    {
        id: 3,
        title: "Corporate Event Mastery",
        subtitle: "PROFESSIONAL STAGE & BRANDED DECOR",
        description: "Plan your next product launch or office anniversary with Celebria's expert corporate planning team.",
        image: "https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg",
        color: "bg-celebration-purple",
        accent: "text-celebration-green",
        link: "/corporate",
        product: corporateDecorations[0].products[0]
    }
];

const PromoBanner = () => {
    const [currentAd, setCurrentAd] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentAd((prev) => (prev + 1) % ads.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextAd = () => setCurrentAd((prev) => (prev + 1) % ads.length);
    const prevAd = () => setCurrentAd((prev) => (prev - 1 + ads.length) % ads.length);

    const handleBookNow = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <div 
            className="relative w-full overflow-hidden bg-white dark:bg-gray-900 h-[300px] md:h-[400px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Ad Slides */}
            {ads.map((ad, index) => (
                <div
                    key={ad.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentAd ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src={ad.image}
                            alt={ad.title}
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent`}></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex items-center container mx-auto px-4 md:px-12" style={{ perspective: 1000 }}>
                        <motion.div 
                            className="max-w-2xl"
                            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        >
                            <div className="animate-in slide-in-from-left-8 duration-700" style={{ transformStyle: "preserve-3d" }}>
                                <div className={`flex items-center gap-2 mb-4 drop-shadow-lg`} style={{ transform: "translateZ(50px)" }}>
                                    <Sparkles className={`w-6 h-6 ${ad.accent}`} />
                                    <span className={`text-sm font-bold tracking-widest uppercase ${ad.accent}`}>
                                        {ad.subtitle}
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 leading-tight drop-shadow-xl" style={{ transform: "translateZ(80px)" }}>
                                    {ad.title}
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-8 line-clamp-2 max-w-xl" style={{ transform: "translateZ(60px)" }}>
                                    {ad.description}
                                </p>
                                <button
                                    onClick={() => handleBookNow(ad.product)}
                                    style={{ transform: "translateZ(100px)" }}
                                    className={`${ad.color} text-white px-8 py-3 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl hover:shadow-2xl flex items-center gap-2 group w-fit`}
                                >
                                    Book Now
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevAd}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-gray-900 dark:text-white backdrop-blur-sm transition-colors hidden md:block"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextAd}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-gray-900 dark:text-white backdrop-blur-sm transition-colors hidden md:block"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {ads.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentAd(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentAd ? "bg-gray-900 dark:bg-white w-8" : "bg-gray-900/30 dark:bg-white/30"
                            }`}
                    />
                ))}
            </div>

            {/* Booking Modal */}
            <BookingDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={selectedProduct}
            />
        </div>
    );
};

export default PromoBanner;

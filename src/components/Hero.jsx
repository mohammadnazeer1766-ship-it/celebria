import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { locations } from '../data/mockData';

const Hero = () => {
    const [selectedCity, setSelectedCity] = useState(locations[0]);

    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1544819667-977a7bd07eb4?auto=format&fit=crop&q=80&w=2070"
                    alt="Kids Birthday Party with Mascot"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>
            </div>

            <div className="container mx-auto px-4 z-10 relative text-center">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/40">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">Magical Moments</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    Live Cartoon Characters <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        For Birthday Party
                    </span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Make your child's birthday magical with our professional mascots and entertainers.
                    Unforgettable memories guaranteed!
                </p>

                <div className="bg-white/10 dark:bg-black/20 backdrop-blur-md p-2 rounded-xl inline-flex flex-col md:flex-row gap-2 max-w-3xl border border-white/20">
                    <div className="relative group">
                        <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg px-4 py-3 min-w-[200px] transition-colors">
                            <MapPin className="text-primary w-5 h-5 mr-2" />
                            <select
                                className="bg-transparent border-none text-gray-800 dark:text-gray-200 font-medium focus:outline-none w-full appearance-none cursor-pointer"
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                            >
                                {locations.map((city) => (
                                    <option key={city} value={city} className="dark:bg-gray-800">{city}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button className="bg-primary hover:bg-pink-600 text-white text-lg font-bold py-3 px-8 rounded-lg shadow-lg transform transition hover:scale-105 flex items-center justify-center gap-2">
                        Book Now
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Shapes / Decoration */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white dark:fill-gray-900 transition-colors duration-300"></path>
                </svg>
            </div>
        </div>
    );
};

export default Hero;

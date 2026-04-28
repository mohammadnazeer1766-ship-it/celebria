import React, { useState } from 'react';
import { X, Search, MapPin, ChevronRight, Navigation } from 'lucide-react';
import { statesWithCities } from '../data/mockData';
import { useCity } from '../context/CityContext';

const LocationModal = ({ isOpen, onClose }) => {
    const { selectedCity, setCity } = useCity();
    const [searchQuery, setSearchQuery] = useState("");

    if (!isOpen) return null;

    const allCities = statesWithCities.flatMap(s => s.cities.map(c => ({ city: c, state: s.state })));

    const filteredCities = searchQuery.trim() === ""
        ? null
        : allCities.filter(c =>
            c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.state.toLowerCase().includes(searchQuery.toLowerCase())
        );

    const handleCitySelect = (cityName) => {
        setCity(cityName);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white dark:bg-gray-800 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Select Location</h3>
                        <p className="text-sm text-gray-500 mt-1">Choose your city to see available services</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-400" />
                    </button>
                </div>

                {/* Search */}
                <div className="p-6 bg-gray-50 dark:bg-gray-900/50">
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                            <Search className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search your city (e.g. Hyderabad, Bangalore...)"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white dark:bg-gray-800 border-2 border-transparent focus:border-primary py-3.5 pl-12 pr-4 rounded-2xl shadow-sm outline-none transition-all text-gray-800 dark:text-gray-100"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-grow overflow-y-auto p-6">
                    {filteredCities ? (
                        <div className="space-y-2">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Search Results</h4>
                            {filteredCities.length > 0 ? (
                                filteredCities.map((item, idx) => (
                                    <button
                                        key={`${item.city}-${idx}`}
                                        onClick={() => handleCitySelect(item.city)}
                                        className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${selectedCity === item.city
                                                ? 'bg-primary/10 border-primary text-primary border-2'
                                                : 'bg-gray-50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-700 border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-600'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-xl ${selectedCity === item.city ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-gray-400'}`}>
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div className="text-left">
                                                <p className="font-bold text-gray-900 dark:text-white">{item.city}</p>
                                                <p className="text-xs text-gray-500 font-medium">{item.state}, India</p>
                                            </div>
                                        </div>
                                        <ChevronRight className={`w-5 h-5 ${selectedCity === item.city ? 'text-primary' : 'text-gray-300'}`} />
                                    </button>
                                ))
                            ) : (
                                <div className="py-12 text-center">
                                    <p className="text-gray-500 font-medium">No cities found matching "{searchQuery}"</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {/* Current Location */}
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Selected City</h4>
                                <div className="bg-primary/5 border-2 border-primary/20 p-4 rounded-2xl flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-primary text-white rounded-xl shadow-lg shadow-primary/20">
                                            <Navigation className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-gray-900 dark:text-white">{selectedCity}</p>
                                            <p className="text-xs text-primary font-bold uppercase tracking-tight">Currently Selected</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* State Grid */}
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">All States & Cities</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {statesWithCities.map((stateItem) => (
                                        <div key={stateItem.state} className="bg-gray-50 dark:bg-gray-900/30 p-5 rounded-2xl border border-gray-100 dark:border-gray-700/50">
                                            <h5 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                {stateItem.state}
                                            </h5>
                                            <div className="flex flex-wrap gap-2">
                                                {stateItem.cities.map((city) => (
                                                    <button
                                                        key={city}
                                                        onClick={() => handleCitySelect(city)}
                                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${selectedCity === city
                                                                ? 'bg-primary text-white shadow-md shadow-primary/20'
                                                                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary/5 hover:text-primary'
                                                            }`}
                                                    >
                                                        {city}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-center">
                    <p className="text-xs text-gray-500 font-medium italic">We are continuously expanding to more cities across India!</p>
                </div>
            </div>
        </div>
    );
};

export default LocationModal;

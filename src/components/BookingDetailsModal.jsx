import React, { useState } from 'react';
import { X, Star, Check, Info, ChevronDown, ChevronUp, Calendar, Clock, Phone, User, MapPin, ShoppingCart, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ title, children, isOpen, onClick }) => (
    <div className="border-b border-gray-100 dark:border-gray-700">
        <button
            onClick={onClick}
            className="w-full py-4 flex items-center justify-between text-left group"
        >
            <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#f05a5a]' : 'text-gray-800 dark:text-gray-200'}`}>
                {title}
            </span>
            {isOpen ? (
                <ChevronUp className="w-5 h-5 text-[#f05a5a]" />
            ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
            )}
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                >
                    <div className="pb-6 pt-2 text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const BookingDetailsModal = ({ isOpen, onClose, product }) => {
    const [openAccordion, setOpenAccordion] = useState('Inclusions');
    const [pincode, setPincode] = useState('');
    const [mobile, setMobile] = useState('');

    if (!isOpen || !product) return null;

    const renderStars = (rating) => {
        return (
            <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i <= Math.floor(rating || 5) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                ))}
                <span className="text-xs font-bold text-gray-900 dark:text-white ml-1">
                    ({product.reviewCount || '9'} reviews+)
                </span>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center sm:p-4">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            ></motion.div>

            {/* Modal Content */}
            <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative bg-white dark:bg-gray-900 w-full max-w-5xl md:rounded-3xl shadow-2xl overflow-hidden h-full md:h-[90vh] flex flex-col"
            >
                {/* Close Button UI */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/50 hover:bg-white transition-colors text-gray-900"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Main Scrollable Area */}
                <div className="flex-grow overflow-y-auto">
                    <div className="flex flex-col md:flex-row">
                        {/* Left Side: Layout Flow */}
                        <div className="md:w-[55%] p-6 md:p-8 space-y-8">
                            {/* Rating & Title */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                                    Rating: {product.rating || '5/5'} {renderStars(product.rating)}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                                    {product.title || product.name} - Hyderabad
                                </h2>
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{product.price}</span>
                                    {product.originalPrice && (
                                        <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                                    )}
                                    {product.discountPercentage && (
                                        <span className="text-blue-500 font-bold text-lg">(-{product.discountPercentage}% OFF)</span>
                                    )}
                                </div>
                            </div>

                            {/* Service Availability Box */}
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 space-y-4">
                                <p className="text-gray-500 dark:text-gray-400 font-medium h-10 flex items-center">
                                    Provide the required details to check your service availability
                                </p>
                                <div className="space-y-3">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Enter your pincode"
                                            className="w-full bg-white dark:bg-gray-700 py-3.5 px-5 rounded-xl border border-transparent focus:border-blue-500 outline-none transition-all font-medium"
                                            value={pincode}
                                            onChange={(e) => setPincode(e.target.value)}
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Enter your mobile no"
                                            className="w-full bg-white dark:bg-gray-700 py-3.5 px-5 rounded-xl border border-transparent focus:border-blue-500 outline-none transition-all font-medium"
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-colors text-lg">
                                    Book Now
                                </button>
                                <button className="flex-1 border-2 border-blue-500 text-blue-500 font-bold py-4 rounded-xl hover:bg-blue-50 shadow-sm transition-colors text-lg flex items-center justify-center gap-2">
                                    <ShoppingCart className="w-5 h-5" />
                                    Add To Cart
                                </button>
                            </div>

                            {/* Enquire Now Form */}
                            <div className="bg-[#fde2e2] dark:bg-red-950/30 rounded-3xl p-8 space-y-6">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Enquire Now</h3>
                                    <Info className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="bg-white dark:bg-gray-700 py-3.5 px-5 rounded-xl outline-none font-medium"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Enter your mobile no"
                                        className="bg-white dark:bg-gray-700 py-3.5 px-5 rounded-xl outline-none font-medium"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Party Date"
                                        className="bg-white dark:bg-gray-700 py-3.5 px-5 rounded-xl outline-none font-medium"
                                        onFocus={(e) => (e.target.type = 'date')}
                                        onBlur={(e) => (e.target.type = 'text')}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Party Time"
                                        className="bg-white dark:bg-gray-700 py-3.5 px-5 rounded-xl outline-none font-medium"
                                        onFocus={(e) => (e.target.type = 'time')}
                                        onBlur={(e) => (e.target.type = 'text')}
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <button className="bg-[#e03a3a] hover:bg-red-700 text-white font-bold py-3 px-12 rounded-xl text-lg transition-colors">
                                        Submit
                                    </button>
                                </div>
                            </div>

                            {/* Accordion Sections */}
                            <div className="space-y-2 pb-10">
                                <AccordionItem
                                    title="Inclusions"
                                    isOpen={openAccordion === 'Inclusions'}
                                    onClick={() => setOpenAccordion(openAccordion === 'Inclusions' ? null : 'Inclusions')}
                                >
                                    <ul className="space-y-3">
                                        {(product.inclusions || [
                                            "40 Balloons on the ceiling with ribbons",
                                            "60 Free floating balloons on the floor or bed"
                                        ]).map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                        {(product.exclusions || [
                                            "Outside city limits",
                                            "Photo hangings",
                                            "Happy Birthday foil letters(Add on)"
                                        ]).map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionItem>

                                <AccordionItem
                                    title="Things to Remember"
                                    isOpen={openAccordion === 'Remember'}
                                    onClick={() => setOpenAccordion(openAccordion === 'Remember' ? null : 'Remember')}
                                >
                                    <ul className="list-disc pl-5 space-y-2">
                                        {(product.thingsToRemember || [
                                            "Setup takes approx 60-90 minutes",
                                            "Please ensure a power socket is nearby",
                                            "Use of wall-safe tapes for decorations"
                                        ]).map((note, idx) => (
                                            <li key={idx}>{note}</li>
                                        ))}
                                    </ul>
                                </AccordionItem>

                                <AccordionItem
                                    title="What you can expect?"
                                    isOpen={openAccordion === 'Expect'}
                                    onClick={() => setOpenAccordion(openAccordion === 'Expect' ? null : 'Expect')}
                                >
                                    <p>High-quality professional service from our experienced team. We use premium materials and ensure complete cleanup after setup. Customer satisfaction is our top priority.</p>
                                </AccordionItem>

                                <AccordionItem
                                    title="Why Celebria?"
                                    isOpen={openAccordion === 'Why'}
                                    onClick={() => setOpenAccordion(openAccordion === 'Why' ? null : 'Why')}
                                >
                                    <ul className="space-y-4">
                                        <li className="flex gap-4">
                                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                                <Star className="text-blue-500 w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">Top Rated Services</h4>
                                                <p className="text-sm">Consistently receiving 4.9+ ratings from over 10,000 satisfied customers.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </AccordionItem>

                                <AccordionItem
                                    title="Cancellation & Refund Policy"
                                    isOpen={openAccordion === 'Policy'}
                                    onClick={() => setOpenAccordion(openAccordion === 'Policy' ? null : 'Policy')}
                                >
                                    <p className="font-bold mb-2">Cancellation Policy:</p>
                                    <p className="mb-4">{product.policies?.cancellation || "Free cancellation up to 24 hours before the event."}</p>
                                    <p className="font-bold mb-2">Refund Policy:</p>
                                    <p>{product.policies?.refund || "100% refund for valid cancellations processed within 5-7 working days."}</p>
                                </AccordionItem>
                            </div>
                        </div>

                        {/* Right Side: Media/Context Sticky */}
                        <div className="hidden md:block md:w-[45%] bg-gray-50 dark:bg-black/20 p-8 h-full sticky top-0">
                            <div className="space-y-6">
                                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src={product.image}
                                        alt={product.title || product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold">Recommended Add-Ons</h4>
                                    <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                                        {['Entrance Arch', 'Cake Tables', 'Foil Balloons'].map(tab => (
                                            <button key={tab} className="whitespace-nowrap px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 border text-sm font-medium hover:border-blue-500 transition-colors">
                                                {tab}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[1, 2].map(i => (
                                            <div key={i} className="bg-white dark:bg-gray-800 p-2 rounded-xl shadow-sm space-y-2 group cursor-pointer">
                                                <div className="aspect-square rounded-lg overflow-hidden">
                                                    <img src={`https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=200&u=${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="addon" />
                                                </div>
                                                <p className="text-xs font-bold truncate">Balloon Arch Variant {i}</p>
                                                <p className="text-blue-500 font-bold text-xs">₹499</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sticky Mobile Buttons / Actions */}
                <div className="md:hidden p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-4 z-50">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500">Price Starts from</span>
                        <span className="text-xl font-bold">₹{product.price}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold">Book Room</button>
                </div>

            </motion.div>
        </div>
    );
};

export default BookingDetailsModal;

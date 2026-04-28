import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';

const CallbackModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 sm:p-12 overflow-y-auto"
                >
                    <motion.div 
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="bg-white rounded-3xl w-full max-w-md p-8 relative shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors p-2 bg-gray-100 rounded-full"
                            aria-label="Close modal"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="text-center mb-8 mt-4">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-[#f03a3a]" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Call Us Now</h2>
                            <p className="text-gray-500">We're here to help! Choose a number to call us directly.</p>
                        </div>

                        <div className="space-y-4">
                            <a 
                                href="tel:960326889" 
                                className="flex items-center justify-center gap-3 w-full bg-gray-50 hover:bg-gray-100 text-gray-800 px-6 py-4 rounded-2xl border border-gray-200 transition-colors text-xl font-semibold"
                            >
                                <Phone className="w-6 h-6 text-gray-600" />
                                960326889
                            </a>
                            <a 
                                href="tel:9052702609" 
                                className="flex items-center justify-center gap-3 w-full bg-[#f03a3a] hover:bg-[#d62d2d] text-white px-6 py-4 rounded-2xl transition-colors text-xl font-semibold shadow-lg shadow-red-500/30"
                            >
                                <Phone className="w-6 h-6" />
                                9052702609
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CallbackModal;

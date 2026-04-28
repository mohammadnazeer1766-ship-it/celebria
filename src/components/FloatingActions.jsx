import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingActions = ({ onRequestCallback }) => {
    return (
        <div className="fixed bottom-6 right-6 z-[210] flex flex-col items-end gap-3 pointer-events-none">
            {/* WhatsApp CHAT Button */}
            <button
                onClick={() => window.open('https://wa.me/yournumber', '_blank')}
                className="pointer-events-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-110 active:scale-95 group"
            >
                <div className="bg-white rounded-full p-1 group-hover:bg-gray-100 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                </div>
                <span className="font-bold text-sm tracking-wider uppercase pr-2">CHAT</span>
            </button>

            {/* Call Us Button */}
            <button
                onClick={onRequestCallback}
                className="pointer-events-auto bg-[#f03a3a] hover:bg-[#d62d2d] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all hover:scale-110 active:scale-95"
            >
                <Phone className="w-6 h-6 fill-white" />
                <span className="font-bold text-lg tracking-wide whitespace-nowrap">Call Us</span>
            </button>
        </div>
    );
};

export default FloatingActions;

import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import brandLogo from '../assets/logo.png';



const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-black text-white pt-12 pb-8 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* About */}
                    <div>
                        <div className="mb-4">
                            <img src={brandLogo} alt="Celebria Logo" className="h-10 w-auto object-contain" />

                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            <span className="text-celebration-red font-bold">Celebria</span> <span className="text-celebration-blue font-bold">Events</span> makes every moment magical with vibrant decorations, interactive activities, and professional planning for all your special occasions.
                        </p>

                    </div>


                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="/birthday" className="hover:text-primary transition-colors">Birthday Packages</a></li>
                            <li><a href="/decorations" className="hover:text-primary transition-colors">Decorations</a></li>
                            <li><a href="/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
                            <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-secondary">Contact Us</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>H.No:43-390,opposite H.K Tent House Near, RTC Colony, Moula Ali,Hyderabad,500040,Telangana</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>960326889</span>
                                <span>9052702609</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>celebria@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Social */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-secondary">Follow Us</h4>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors text-white">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors text-white">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors text-white">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm mb-2">Subscribe to our newsletter</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full text-sm"
                            />
                            <button className="bg-primary px-4 py-2 rounded-r-md font-medium text-white hover:bg-pink-600 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Celebria Events. All rights reserved.</p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;

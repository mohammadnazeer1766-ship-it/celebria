import React, { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../data/mockData';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" id="gallery">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Gallery</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mt-2 mb-4">Capturing Magical Moments</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        See the smiles and joy we bring to every event.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden group rounded-xl cursor-pointer aspect-square"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg border border-white px-4 py-2 rounded-lg">View</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full size"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    />
                </div>
            )}
        </section>
    );
};

export default Gallery;

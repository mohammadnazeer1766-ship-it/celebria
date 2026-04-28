import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { decorationCategories, birthdayDecorations, festivalDecorations, corporateDecorations, kidsActivities, candlelightDinners, occasionsDecorations } from '../data/mockData';
import { MessageCircle, Phone, ArrowLeft } from 'lucide-react';
import BookingDetailsModal from '../components/BookingDetailsModal';

const DecorationCategoryDetails = () => {
    const { categoryId } = useParams();
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    // Combine both lists to find the category
    const allCategories = [...decorationCategories, ...birthdayDecorations, ...festivalDecorations, ...corporateDecorations, ...kidsActivities, ...candlelightDinners, ...occasionsDecorations];
    const category = allCategories.find(cat => cat.id === parseInt(categoryId));

    if (!category || !category.products) {
        return (
            <div className="pt-24 min-h-screen text-center">
                <h1 className="text-2xl font-bold">Category details not found</h1>
                <Link to="/" className="text-primary hover:underline mt-4 inline-block">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen pb-20 pt-8 transition-colors duration-300">
            <div className="container mx-auto px-4 py-8">
                {/* Back Button */}
                <Link
                    to={
                    categoryId >= 600 ? "/occasions" :
                        (categoryId >= 500 ? "/" :
                            (categoryId >= 400 ? "/" :
                                (categoryId >= 300 ? "/corporate" :
                                    (categoryId >= 200 ? "/festival" :
                                        (categoryId >= 100 ? "/birthday" : "/decorations")))))
                    }
                    className="flex items-center gap-2 text-primary font-medium mb-6 hover:underline"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to {
                    categoryId >= 600 ? "Occasions" :
                        (categoryId >= 500 ? "Home" :
                            (categoryId >= 400 ? "Home" :
                                (categoryId >= 300 ? "Corporate" :
                                    (categoryId >= 200 ? "Festival" :
                                        (categoryId >= 100 ? "Birthday" : "Decorations")))))
                    }
                </Link>

                <h1 className="text-2xl md:text-3xl font-medium text-center text-gray-800 dark:text-gray-100 mb-2 transition-colors">
                    {category.title}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-center mb-12 transition-colors">Browse our best-selling {category.title} packages</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden group transition-colors"
                        >
                            {/* Product Image */}
                            <div className="aspect-[4/3] w-full overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                                    {product.price}
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors">{product.name}</h3>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => {
                                            setSelectedProduct(product);
                                            setIsModalOpen(true);
                                        }}
                                        className="w-full bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Booking Details Modal */}
            <BookingDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={selectedProduct}
            />
        </div>
    );
};

export default DecorationCategoryDetails;

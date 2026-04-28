import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchDropdown = ({ results, onClose }) => {
    const navigate = useNavigate();

    if (results.length === 0) return null;

    const handleItemClick = (link) => {
        navigate(link);
        onClose();
    };

    return (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-xl rounded-b-2xl border border-gray-100 dark:border-gray-700 mt-1 max-h-96 overflow-y-auto z-[60] py-2">
            <div className="px-4 py-2 border-b border-gray-50 dark:border-gray-700 mb-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Search Results</span>
            </div>
            {results.slice(0, 8).map((item) => (
                <div
                    key={item.id}
                    onClick={() => handleItemClick(item.link)}
                    className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-4 transition-colors border-b border-gray-50 dark:border-gray-700 last:border-0"
                >
                    <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-600">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                        <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100 line-clamp-1">{item.title}</h4>
                        <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-md font-medium">
                                {item.type}
                            </span>
                            <span className="text-[10px] text-gray-400 italic">
                                in {item.category}
                            </span>
                            {item.price && (
                                <span className="text-[11px] font-bold text-gray-600 dark:text-gray-400 ml-auto">
                                    {item.price}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            {results.length > 8 && (
                <div
                    onClick={() => {
                        navigate(`/search?q=${encodeURIComponent(results[0].query || '')}`);
                        onClose();
                    }}
                    className="px-4 py-3 text-center text-primary text-sm font-semibold hover:bg-primary/5 transition-colors cursor-pointer"
                >
                    View all {results.length} results
                </div>
            )}
        </div>
    );
};

export default SearchDropdown;

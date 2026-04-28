import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { searchItems } from '../utils/searchUtils';
import { Search as SearchIcon, Filter, ArrowRight } from 'lucide-react';

const SearchPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialQuery = queryParams.get('q') || '';

    const [searchQuery, setSearchQuery] = useState(initialQuery);
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        if (initialQuery) {
            handleSearch(initialQuery);
        }
    }, [initialQuery]);

    const handleSearch = (query) => {
        setIsSearching(true);
        const filtered = searchItems(query);
        setResults(filtered);
        setIsSearching(false);
    };

    const onInputChange = (e) => {
        setSearchQuery(e.target.value);
        handleSearch(e.target.value);
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-20 pt-24 transition-colors duration-300">
            <div className="container mx-auto px-4">
                {/* Search Header */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm p-6 md:p-10 mb-8 border border-gray-100 dark:border-gray-700">
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                        <SearchIcon className="w-8 h-8 text-primary" />
                        Search Results
                    </h1>

                    <div className="relative max-w-2xl">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={onInputChange}
                            placeholder="What are you looking for?"
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:border-primary transition-all text-lg"
                        />
                        <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                    </div>
                </div>

                {/* Results Section */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Filters Placeholder */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 sticky top-28">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                                    <Filter className="w-4 h-4" /> Filters
                                </h3>
                                <button className="text-xs text-primary font-medium">Clear All</button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <span className="text-xs font-semibold text-gray-400 uppercase">Status</span>
                                    <div className="mt-2 space-y-2">
                                        <label className="flex items-center text-sm text-gray-600 dark:text-gray-400 gap-2 cursor-pointer">
                                            <input type="checkbox" className="rounded text-primary focus:ring-primary" checked readOnly />
                                            <span>Available Items ({results.length})</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Results Grid */}
                    <div className="flex-grow">
                        {results.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {results.map((item) => (
                                    <Link
                                        to={item.link}
                                        key={item.id}
                                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden group hover:shadow-md transition-all flex flex-col"
                                    >
                                        <div className="aspect-[4/3] overflow-hidden relative">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                                                    {item.type}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-5 flex flex-col flex-grow">
                                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter mb-1">
                                                {item.category}
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2">
                                                {item.title}
                                            </h3>
                                            <div className="mt-auto flex items-center justify-between pt-4">
                                                {item.price ? (
                                                    <span className="text-primary font-black text-xl">{item.price}</span>
                                                ) : (
                                                    <span className="text-gray-400 text-sm italic">Category View</span>
                                                )}
                                                <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors">
                                                    <ArrowRight className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white dark:bg-gray-800 rounded-3xl p-20 text-center border-2 border-dashed border-gray-200 dark:border-gray-700">
                                <div className="w-20 h-20 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <SearchIcon className="w-10 h-10 text-gray-300" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">No results found</h2>
                                <p className="text-gray-500 max-w-xs mx-auto">
                                    We couldn't find anything matching "{searchQuery}". Try different keywords or browse categories.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;

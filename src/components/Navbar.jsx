import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, Menu, X, Phone, MessageCircle, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { searchItems } from '../utils/searchUtils';
import SearchDropdown from './SearchDropdown';
import brandLogo from '../assets/logo.png';


const Navbar = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim()) {
            const results = searchItems(query);
            setSearchResults(results.map(r => ({ ...r, query })));
            setIsSearchDropdownOpen(true);
        } else {
            setSearchResults([]);
            setIsSearchDropdownOpen(false);
        }
    };

    const handleSearchSubmit = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            if (searchQuery.trim()) {
                navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                setIsSearchDropdownOpen(false);
            }
        }
    };

    const navCategories = [
        { name: "Birthday", hasDropdown: false, color: "bg-celebration-red" },
        { name: "Decorations", hasDropdown: true, color: "bg-celebration-blue" },
        { name: "Corporate Planner", hasDropdown: true, color: "bg-celebration-purple" },
        { name: "Toys and Gifts", hasDropdown: true, color: "bg-celebration-green" },
        { name: "Occasions", hasDropdown: true, color: "bg-celebration-pink" },
    ];


    return (
        <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 font-sans transition-colors duration-300">
            {/* Top Row: Logo, Search, Actions */}
            <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0">
                    <img src={brandLogo} alt="Celebria Logo" className="h-12 w-auto object-contain" />
                </Link>


                {/* Search Bar - Hidden on mobile, Flex on md */}
                <div className="hidden md:flex flex-grow max-w-3xl mx-8 relative">
                    <input
                        type="text"
                        placeholder="Search by event, birthday, party..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onKeyDown={handleSearchSubmit}
                        onBlur={() => setTimeout(() => setIsSearchDropdownOpen(false), 200)}
                        onFocus={() => searchQuery.trim() && setIsSearchDropdownOpen(true)}
                        className="w-full pl-4 pr-10 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-200 focus:outline-none focus:border-gray-400 text-sm"
                    />
                    <Search
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5 cursor-pointer"
                        onClick={handleSearchSubmit}
                    />

                    {isSearchDropdownOpen && (
                        <SearchDropdown
                            results={searchResults}
                            onClose={() => setIsSearchDropdownOpen(false)}
                        />
                    )}
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/5 transition-colors"
                        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                    >
                        {theme === 'light' ? (
                            <>
                                <Moon className="w-4 h-4" />
                                <span className="font-medium text-sm">Dark</span>
                            </>
                        ) : (
                            <>
                                <Sun className="w-4 h-4" />
                                <span className="font-medium text-sm">Light</span>
                            </>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-700 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Bottom Row: Navigation Categories */}
            <div className="hidden md:block py-2 border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300">
                <div className="container mx-auto px-4 flex justify-center space-x-2">
                    {navCategories.map((category) => (
                        <div key={category.name} className="relative group">
                            <Link
                                to={
                                    category.name === "Birthday" ? "/birthday" :
                                        category.name === "Decorations" ? "/decorations" :
                                            category.name === "Festival Decorations" ? "/festival" :
                                                category.name === "Corporate Planner" ? "/corporate" :
                                                    category.name === "Toys and Gifts" ? "/toys-gifts" :
                                                        category.name === "Occasions" ? "/occasions" : "/"
                                }
                                className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105 shadow-sm hover:shadow-md text-white ${category.color} ${category.name === "Festival Decorations" || category.name === "Decorations" ? "text-white" : ""
                                    }`}

                            >
                                {category.name}
                                {category.hasDropdown && <ChevronDown className="w-3 h-3 ml-1" />}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
                    <div className="relative mb-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onKeyDown={handleSearchSubmit}
                            className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-primary text-sm"
                        />
                        <Search
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary w-4 h-4 cursor-pointer"
                            onClick={handleSearchSubmit}
                        />

                        {isSearchDropdownOpen && searchQuery.trim() && (
                            <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-xl rounded-b-xl border border-gray-100 dark:border-gray-700 z-[70] max-h-60 overflow-y-auto">
                                {searchResults.slice(0, 5).map(item => (
                                    <div
                                        key={item.id}
                                        onClick={() => {
                                            navigate(item.link);
                                            setIsMobileMenuOpen(false);
                                            setIsSearchDropdownOpen(false);
                                        }}
                                        className="px-4 py-2 border-b border-gray-50 dark:border-gray-700 flex items-center gap-3"
                                    >
                                        <img src={item.image} className="w-8 h-8 rounded object-cover" />
                                        <div className="flex-grow">
                                            <div className="text-xs font-bold text-gray-800 dark:text-gray-100 line-clamp-1">{item.title}</div>
                                            <div className="text-[10px] text-gray-400">{item.type}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col space-y-2">
                        {navCategories.map((category) => (
                            <Link
                                key={category.name}
                                to={
                                    category.name === "Birthday" ? "/birthday" :
                                        category.name === "Decorations" ? "/decorations" :
                                            category.name === "Festival Decorations" ? "/festival" :
                                                category.name === "Corporate Planner" ? "/corporate" :
                                                    category.name === "Toys and Gifts" ? "/toys-gifts" :
                                                        category.name === "Occasions" ? "/occasions" : "/"
                                }
                                className={`py-2 px-4 rounded-lg text-white font-bold text-sm ${category.color} shadow-sm active:scale-95 transition-all`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {category.name}
                            </Link>
                        ))}

                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;

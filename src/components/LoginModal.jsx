import React, { useState } from 'react';
import { X, Mail, Lock, LogIn, Github, Chrome, ArrowRight, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LoginModal = ({ isOpen, onClose }) => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            await login(email, password);
            onClose();
        } catch (err) {
            setError('Invalid email or password. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white dark:bg-gray-800 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="flex flex-col md:flex-row min-h-[500px]">
                    {/* Left Side: Illustration or Brand Info (Optional/Desktop) */}
                    <div className="hidden md:flex md:w-2/5 bg-primary p-12 text-white flex-col justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-black tracking-tight mb-4">Welcome Back!</h2>
                            <p className="text-white/80 text-sm leading-relaxed">
                                Log in to access your bookings, save your favorite decorations, and more.
                            </p>
                        </div>

                        {/* Abstract blobs */}
                        <div className="absolute top-[-10%] right-[-20%] w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-[-10%] left-[-20%] w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 flex items-center gap-2">
                            <span className="text-xs font-bold tracking-widest uppercase">Celebria</span>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Login</h3>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        {error && (
                            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-2xl flex items-center gap-3 animate-in slide-in-from-top-2 duration-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                <p className="text-sm text-red-600 dark:text-red-400 font-medium">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@example.com"
                                        className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-gray-50 dark:border-gray-700 focus:border-primary py-3.5 pl-12 pr-4 rounded-2xl outline-none transition-all text-gray-800 dark:text-gray-100"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Password</label>
                                    <button type="button" className="text-xs font-bold text-primary hover:underline">Forgot?</button>
                                </div>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                                        <Lock className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-gray-50 dark:border-gray-700 focus:border-primary py-3.5 pl-12 pr-4 rounded-2xl outline-none transition-all text-gray-800 dark:text-gray-100"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-primary hover:bg-red-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-70 mt-4 group"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <span>Sign In</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-8">
                            <div className="relative mb-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-100 dark:border-gray-700"></div>
                                </div>
                                <div className="relative flex justify-center text-xs text-gray-400 bg-white dark:bg-gray-800 px-4 font-bold uppercase tracking-widest">
                                    Or Continue With
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-2 py-3 border-2 border-gray-50 dark:border-gray-700 rounded-2xl font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">
                                    <Chrome className="w-4 h-4" /> Google
                                </button>
                                <button className="flex items-center justify-center gap-2 py-3 border-2 border-gray-50 dark:border-gray-700 rounded-2xl font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">
                                    <Github className="w-4 h-4" /> Github
                                </button>
                            </div>
                        </div>

                        <p className="mt-8 text-center text-sm text-gray-400 font-medium">
                            Don't have an account? <button className="text-primary font-bold hover:underline">Create One</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;

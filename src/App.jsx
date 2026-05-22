import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import CallbackModal from './components/CallbackModal';
import Home from './pages/Home';
import BirthdayPage from './pages/BirthdayPage';
import FestivalPage from './pages/FestivalPage';
import CorporatePage from './pages/CorporatePage';

import OccasionsPage from './pages/OccasionsPage';
import DecorationsPage from './pages/DecorationsPage';
import ToysAndGiftsPage from './pages/ToysAndGiftsPage';
import DecorationCategoryDetails from './pages/DecorationCategoryDetails';
import SearchPage from './pages/SearchPage';
import AdminBookings from './pages/AdminBookings';


// Placeholder components for other routes
const PlaceholderPage = ({ title }) => (
  <div className="pt-24 pb-20 min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-500">Coming Soon</p>
    </div>
  </div>
);

import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { CityProvider } from './context/CityContext';

function App() {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    axios.get('/api/hello')
      .then(response => {
        setBackendMessage(response.data.message);
      })
      .catch(error => {
        console.error("Error fetching backend:", error);
        setBackendMessage("Backend disconnected");
      });
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <CityProvider>
          <Router>
            <div className="font-sans text-gray-900 dark:text-gray-100 bg-mesh-light dark:bg-mesh-dark min-h-screen transition-colors duration-300 relative">
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-[2px] pointer-events-none" style={{ zIndex: 0 }}></div>
              
              {/* Content Wrapper */}
              <div className="relative" style={{ zIndex: 1 }}>
                {backendMessage && (
                  <div className="bg-indigo-600 text-white text-center py-2 px-4 text-sm font-medium shadow-md">
                    Python Backend Status: {backendMessage}
                  </div>
                )}
                <Navbar />
                <PromoBanner />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/birthday" element={<BirthdayPage />} />
                  <Route path="/birthday/:categoryId" element={<DecorationCategoryDetails />} />
                  <Route path="/festival" element={<FestivalPage />} />
                  <Route path="/festival/:categoryId" element={<DecorationCategoryDetails />} />
                  <Route path="/corporate" element={<CorporatePage />} />
                  <Route path="/corporate/:categoryId" element={<DecorationCategoryDetails />} />

                  <Route path="/occasions" element={<OccasionsPage />} />
                  <Route path="/occasions/:categoryId" element={<DecorationCategoryDetails />} />
                  <Route path="/toys-gifts" element={<ToysAndGiftsPage />} />
                  <Route path="/toys-gifts/:categoryId" element={<DecorationCategoryDetails />} />
                  <Route path="/decorations/:categoryId" element={<DecorationCategoryDetails />} />
                  <Route path="/decorations" element={<DecorationsPage />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/admin" element={<AdminBookings />} />
                  <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
                  <Route path="/faq" element={<PlaceholderPage title="Frequently Asked Questions" />} />
                </Routes>
                <Footer />

                <FloatingActions onRequestCallback={() => setIsCallbackModalOpen(true)} />
                <CallbackModal isOpen={isCallbackModalOpen} onClose={() => setIsCallbackModalOpen(false)} />
              </div>
            </div>
          </Router>
        </CityProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

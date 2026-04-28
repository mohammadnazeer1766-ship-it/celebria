import React, { useState } from 'react';
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

  return (
    <ThemeProvider>
      <AuthProvider>
        <CityProvider>
          <Router>
            <div className="font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300 relative">
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
                <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
                <Route path="/faq" element={<PlaceholderPage title="Frequently Asked Questions" />} />
              </Routes>
              <Footer />

              <FloatingActions onRequestCallback={() => setIsCallbackModalOpen(true)} />
              <CallbackModal isOpen={isCallbackModalOpen} onClose={() => setIsCallbackModalOpen(false)} />
            </div>
          </Router>
        </CityProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

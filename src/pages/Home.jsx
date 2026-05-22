import React from 'react';
import { Link } from 'react-router-dom';
import { decorationCategories } from '../data/mockData';
import { motion } from 'framer-motion';
import HeroHome from '../components/HeroHome';
import AboutCelebria from '../components/AboutCelebria';
import WhyCelebria from '../components/WhyCelebria';
import UpdatesSection from '../components/UpdatesSection';

const Home = () => {
    const categories = decorationCategories;

    return (
        <div className="min-h-screen transition-colors duration-300 font-sans">
            <HeroHome />

            <AboutCelebria />
            <WhyCelebria />
            <UpdatesSection />

        </div>
    );
};

export default Home;

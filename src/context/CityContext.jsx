import React, { createContext, useContext, useState, useEffect } from 'react';
import { statesWithCities } from '../data/mockData';

const CityContext = createContext();

export const CityProvider = ({ children }) => {
    // Initialize from localStorage or default to Hyderabad
    const [selectedCity, setSelectedCity] = useState(() => {
        return localStorage.getItem('selectedCity') || "Hyderabad";
    });

    const [selectedState, setSelectedState] = useState(() => {
        return localStorage.getItem('selectedState') || "Telangana";
    });

    // Update state based on city
    const setCity = (cityName) => {
        const foundState = statesWithCities.find(s => s.cities.includes(cityName));
        if (foundState) {
            setSelectedCity(cityName);
            setSelectedState(foundState.state);
            localStorage.setItem('selectedCity', cityName);
            localStorage.setItem('selectedState', foundState.state);
        } else {
            // If city not found in our structured list, just set the city
            setSelectedCity(cityName);
            localStorage.setItem('selectedCity', cityName);
        }
    };

    return (
        <CityContext.Provider value={{ selectedCity, selectedState, setCity }}>
            {children}
        </CityContext.Provider>
    );
};

export const useCity = () => {
    const context = useContext(CityContext);
    if (!context) {
        throw new Error('useCity must be used within a CityProvider');
    }
    return context;
};


import React, { createContext, useContext, useState, useEffect } from 'react';

interface SettingsContextType {
  darkMode: boolean;
  selectedLanguage: string;
  selectedCity: string;
  cityPublic: boolean;
  setDarkMode: (value: boolean) => void;
  setSelectedLanguage: (value: string) => void;
  setSelectedCity: (value: string) => void;
  setCityPublic: (value: boolean) => void;
  saveSettings: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'en-GB';
  });
  
  const [selectedCity, setSelectedCity] = useState(() => {
    return localStorage.getItem('selectedCity') || 'london';
  });
  
  const [cityPublic, setCityPublic] = useState(() => {
    const saved = localStorage.getItem('cityPublic');
    return saved ? JSON.parse(saved) : false;
  });

  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#ffffff';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
  }, [darkMode]);

  const saveSettings = () => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    localStorage.setItem('selectedLanguage', selectedLanguage);
    localStorage.setItem('selectedCity', selectedCity);
    localStorage.setItem('cityPublic', JSON.stringify(cityPublic));
  };

  return (
    <SettingsContext.Provider value={{
      darkMode,
      selectedLanguage,
      selectedCity,
      cityPublic,
      setDarkMode,
      setSelectedLanguage,
      setSelectedCity,
      setCityPublic,
      saveSettings
    }}>
      {children}
    </SettingsContext.Provider>
  );
};

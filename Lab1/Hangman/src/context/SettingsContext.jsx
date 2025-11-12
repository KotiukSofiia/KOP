import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState(
    () => localStorage.getItem('hangman-difficulty') || 'easy'
  );

  useEffect(() => {
    localStorage.setItem('hangman-difficulty', difficulty);
  }, [difficulty]);

  const value = {
    difficulty,
    setDifficulty,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
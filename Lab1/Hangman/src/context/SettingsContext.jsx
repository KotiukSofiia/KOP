import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Створюємо Context
const SettingsContext = createContext();

// 2. Створюємо "Провайдер"
export const SettingsProvider = ({ children }) => {
  // 3. Стан, який ми будемо зберігати (з 'easy' за замовчуванням)
  // Ми також читаємо початкове значення з localStorage
  const [difficulty, setDifficulty] = useState(
    () => localStorage.getItem('hangman-difficulty') || 'easy'
  );

  // 4. Коли складність змінюється, зберігаємо її в localStorage
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

// 5. Створюємо кастомний хук для легкого доступу до контексту
export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
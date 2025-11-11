import React, { useState, useCallback } from 'react';
import StartPage from './pages/StartPage'; 
import GamePage from './pages/GamePage'; 
import SettingsPage from './pages/SettingsPage'; 
import { useSettings } from './context/SettingsContext'; 

const EASY_WORDS = ['REACT', 'VITE', 'HOOKS', 'STATE', 'CSS', 'HTML'];
const HARD_WORDS = ['JAVASCRIPT', 'COMPONENT', 'TYPESCRIPT', 'FRONTEND', 'HANGMAN', 'CONTEXT'];

const getRandomWord = (difficulty) => {
  const list = difficulty === 'easy' ? EASY_WORDS : HARD_WORDS;
  return list[Math.floor(Math.random() * list.length)];
};

function App() {
  const [currentPage, setCurrentPage] = useState('start'); 
  
  const { difficulty } = useSettings(); 
  
  const [wordToGuess, setWordToGuess] = useState(() => getRandomWord(difficulty)); 

  const handleStartGame = useCallback(() => {
    setWordToGuess(getRandomWord(difficulty)); 
    setCurrentPage('game');
  }, [difficulty]); 

  const handleGoToMenu = useCallback(() => {
    setCurrentPage('start');
  }, []); 

  const handleGoToSettings = useCallback(() => {
    setCurrentPage('settings');
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'start':
        return <StartPage 
                 onStartGame={handleStartGame} 
                 onGoToSettings={handleGoToSettings} 
               />;
      
      case 'game':
        return <GamePage 
                 wordToGuess={wordToGuess}
                 onNewGame={handleStartGame} 
                 onGoToMenu={handleGoToMenu}  
               />;
      
      case 'settings':
        return <SettingsPage onBack={handleGoToMenu} />;
      
      default:
        return <StartPage onStartGame={handleStartGame} />;
    }
  };

  return (
    <div className="app-container">
      {renderPage()}
    </div>
  );
}
export default App;
import React, { useState, useCallback } from 'react';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import ResultsPage from './pages/ResultsPage';

const WORD_LIST = ['REACT', 'VITE', 'JAVASCRIPT', 'COMPONENT', 'HOOKS', 'STATE', 'FRONTEND', 'HANGMAN'];

const getRandomWord = () => {
  return WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
};

function App() {
  const [currentPage, setCurrentPage] = useState('start'); 
  const [gameResult, setGameResult] = useState(null); 
  
  const [wordToGuess, setWordToGuess] = useState(getRandomWord());

  const handleStartGame = useCallback(() => {
    setWordToGuess(getRandomWord()); 
    console.log('The game has begun!');
    setCurrentPage('game');
    setGameResult(null);
  }, []); 

  const handleGameEnd = useCallback((isWin) => {
    console.log('Game over. Victory:', isWin);
    setGameResult(isWin);
    setCurrentPage('results');
  }, []);

  const handlePlayAgain = useCallback(() => {
    console.log('Play Again!');
    setCurrentPage('start');
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'start':
        return <StartPage onStartGame={handleStartGame} />;
      
      case 'game':
        return <GamePage 
                 onGameEnd={handleGameEnd} 
                 wordToGuess={wordToGuess} 
               />;
      
      case 'results':
        return <ResultsPage 
                 isWin={gameResult} 
                 onPlayAgain={handlePlayAgain} 
                 wordToGuess={wordToGuess} 
               />;
      
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
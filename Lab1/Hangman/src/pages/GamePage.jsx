import React, { useEffect } from 'react'; 
import { useHangman } from '../hooks/useHangman'; 

import HangmanVisual from '../components/HangmanVisual';
import WordDisplay from '../components/WordDisplay';
import Keyboard from '../components/Keyboard';

const GamePage = ({ onGameEnd, wordToGuess }) => {
  
  const {
    guessedLetters,
    wrongLetters,
    mistakesCount,
    isGameWon,
    isGameLost,
    guessLetter, 
  } = useHangman(wordToGuess); 
  
  useEffect(() => {
    if (isGameWon) {
      const timer = setTimeout(() => {
        onGameEnd(true); 
      }, 1000); 
      return () => clearTimeout(timer);
    }

    if (isGameLost) {
      const timer = setTimeout(() => {
        onGameEnd(false); 
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [isGameWon, isGameLost, onGameEnd]); 

  return (
    <div className="game-page">
      <h2>Try to guess the word!</h2>

      <HangmanVisual 
        mistakesCount={mistakesCount} 
        animateOnLoss={isGameLost} 
      />

      <WordDisplay
        wordToGuess={wordToGuess} 
        guessedLetters={guessedLetters}
      />

      <Keyboard
        onLetterClick={guessLetter}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        isGameDisabled={isGameWon || isGameLost} 
      />
    </div>
  );
};

export default GamePage;
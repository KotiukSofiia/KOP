import React from 'react';
import HangmanVisual from '../components/HangmanVisual';
import WordDisplay from '../components/WordDisplay';
import Keyboard from '../components/Keyboard';

const GamePage = ({ onGameEnd, wordToGuess }) => {
  
  
  const guessedLetters = ['T']; 
  const wrongLetters = ['A', 'B']; 
  const mistakesCount = wrongLetters.length; 

  const handleLetterClick = (letter) => {
    console.log(`Letter clicked: ${letter}. (Game logic not implemented yet)`);
  };

  const isGameWon = false; 
  const isGameLost = mistakesCount >= 6;

  return (
    <div className="game-page">
      <h2>Try to guess the word!</h2>

      <HangmanVisual mistakesCount={mistakesCount} />

      <WordDisplay
        wordToGuess={wordToGuess} 
        guessedLetters={guessedLetters}
      />

      {!isGameWon && !isGameLost ? (
        <Keyboard
          onLetterClick={handleLetterClick}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
        />
      ) : (
        <p>Game over!</p>
      )}

      <div style={{ marginTop: '2rem' }}>
        <p>(for testing):</p>
        <button onClick={() => onGameEnd(true)}>Simulate Win</button>
        <button onClick={() => onGameEnd(false)}>Simulate Loss</button>
      </div>
    </div>
  );
};

export default GamePage;
import React from 'react';
import '../styles/WordDisplay.css'; 

const WordDisplay = ({ wordToGuess, guessedLetters }) => {
  return (
    <div className="word-display">
      {wordToGuess.split('').map((letter, index) => (
        <span className="letter-placeholder" key={index}>
          {guessedLetters.includes(letter) ? letter : ''}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;
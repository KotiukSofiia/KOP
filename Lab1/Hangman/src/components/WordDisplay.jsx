import React from 'react';
import styles from './WordDisplay.module.css';

const WordDisplay = ({ wordToGuess, guessedLetters }) => {
  return (
    <div className={styles.wordDisplay}>
      {wordToGuess.split('').map((letter, index) => (
        <span className={styles.letterPlaceholder} key={index}>
          {guessedLetters.includes(letter) ? letter : ''}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;
import React from 'react';
import styles from './Keyboard.module.css';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const Keyboard = ({ onLetterClick, guessedLetters, wrongLetters, isGameDisabled = false }) => {
  return (
    <div className={styles.keyboard}>
      {ALPHABET.map((letter) => {
        const isGuessed = guessedLetters.includes(letter);
        const isWrong = wrongLetters.includes(letter);

        const isDisabled = isGameDisabled || isGuessed || isWrong;

        return (
          <button
            key={letter}
            className={`${styles.key} ${isGuessed ? styles.guessed : ''} ${isWrong ? styles.wrong : ''}`}
            onClick={() => onLetterClick(letter)}
            disabled={isDisabled}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;

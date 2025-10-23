import React from 'react';
import '../styles/Keyboard.css'; 

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const Keyboard = ({ onLetterClick, guessedLetters, wrongLetters }) => {
  return (
    <div className="keyboard">
      {ALPHABET.map((letter) => {
        const isGuessed = guessedLetters.includes(letter);
        const isWrong = wrongLetters.includes(letter);
        const isDisabled = isGuessed || isWrong;

        return (
          <button
            key={letter}
            className={`key ${isGuessed ? 'guessed' : ''} ${isWrong ? 'wrong' : ''}`}
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
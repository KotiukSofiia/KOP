import { useState, useEffect, useMemo, useCallback } from 'react';

export const useHangman = (wordToGuess) => {  
  const [guessedLetters, setGuessedLetters] = useState([]); 
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }, [wordToGuess]); 

  const mistakesCount = useMemo(() => wrongLetters.length, [wrongLetters]);

  const isGameWon = useMemo(() => {
    if (wordToGuess.length === 0) return false;
    return wordToGuess.split('').every(letter => guessedLetters.includes(letter));
  }, [wordToGuess, guessedLetters]);

  const isGameLost = useMemo(() => mistakesCount >= 6, [mistakesCount]);

  const guessLetter = useCallback((letter) => {
    letter = letter.toUpperCase(); 
    
    if (isGameWon || isGameLost || guessedLetters.includes(letter) || wrongLetters.includes(letter)) {
      return;
    }

    if (wordToGuess.includes(letter)) {
      setGuessedLetters(currentLetters => [...currentLetters, letter]);
    } else {
      setWrongLetters(currentLetters => [...currentLetters, letter]);
    }
  }, [wordToGuess, guessedLetters, wrongLetters, isGameWon, isGameLost]); 

  return {
    guessedLetters,
    wrongLetters,
    mistakesCount,
    isGameWon,
    isGameLost,
    guessLetter,
  };
};
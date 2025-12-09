import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useHangman } from '../hooks/useHangman';
import { useGameStore } from '../store/useGameStore';
import HangmanVisual from '../components/HangmanVisual';
import WordDisplay from '../components/WordDisplay';
import Keyboard from '../components/Keyboard';
import ResultsModal from '../components/ResultsModal';
import styles from './GamePage.module.css';

const EASY_WORDS = ['REACT', 'VITE', 'HOOKS', 'STATE', 'CSS', 'HTML'];
const HARD_WORDS = ['JAVASCRIPT', 'COMPONENT', 'TYPESCRIPT', 'FRONTEND', 'HANGMAN', 'CONTEXT'];

const getRandomWord = (difficulty) => {
  const list = difficulty === 'easy' ? EASY_WORDS : HARD_WORDS;
  return list[Math.floor(Math.random() * list.length)];
};

const GamePage = () => {
  const { userName } = useParams();
  const navigate = useNavigate();
  
  // Zustand: беремо складність і функцію додавання результату
  const difficulty = useGameStore((state) => state.difficulty);
  const addGameResult = useGameStore((state) => state.addGameResult);

  const [wordToGuess, setWordToGuess] = useState(() => getRandomWord(difficulty));

  const handleNewGame = useCallback(() => {
    setWordToGuess(getRandomWord(difficulty));
  }, [difficulty]);

  const {
    guessedLetters,
    wrongLetters,
    mistakesCount,
    isGameWon,
    isGameLost,
    guessLetter,
  } = useHangman(wordToGuess);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ефект завершення гри
  useEffect(() => {
    if (!isGameWon && !isGameLost) {
      setIsModalOpen(false);
      return;
    }

    // --- ЗБЕРІГАЄМО РЕЗУЛЬТАТ В STORE ---
    // Робимо це лише один раз, коли гра закінчилась
    // Щоб не дублювати, можна додати перевірку або винести в окрему функцію.
    // Але оскільки useEffect спрацює при зміні isGameWon/Lost, 
    // нам треба переконатися, що ми не запишемо результат двічі під час рендеру.
    // Найкраще це зробити в момент, коли ми відкриваємо модалку (через таймер).
    
    const timer = setTimeout(() => {
      setIsModalOpen(true);
      
      // додавання запису в історію
      addGameResult({
        id: Date.now(), // унікальне id
        playerName: userName,
        date: new Date().toLocaleString(),
        result: isGameWon ? 'Win' : 'Loss',
        word: wordToGuess,
        difficulty: difficulty
      });
      
    }, isGameWon ? 1000 : 3000);

    return () => clearTimeout(timer);
  }, [isGameWon, isGameLost]); 

  const handlePlayAgain = () => {
    setIsModalOpen(false);
    handleNewGame();
  };

  const handleGoToMenu = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <div className={styles.gamePage}>
      {isModalOpen && (
        <ResultsModal
          isWin={isGameWon}
          wordToGuess={wordToGuess}
          onPlayAgain={handlePlayAgain}
          onGoToMenu={handleGoToMenu}
        />
      )}
      <h2 className={styles.greeting}>Good luck, {userName}!</h2>
      <h2 className={styles.title}>Try to guess the word!</h2>
      <p className={styles.subtitle}>Each wrong letter draws a new part.</p>
      
      <div className={styles.visualSection}>
        <HangmanVisual mistakesCount={mistakesCount} animateOnLoss={isGameLost} />
      </div>
      <div className={styles.wordSection}>
        <WordDisplay wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      </div>
      <div className={styles.keyboardSection}>
        <Keyboard
          onLetterClick={guessLetter}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          isGameDisabled={isGameWon || isGameLost}
        />
      </div>
    </div>
  );
};

export default GamePage;
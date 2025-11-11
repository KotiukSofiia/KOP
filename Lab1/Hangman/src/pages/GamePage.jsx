import React, { useEffect, useState } from 'react'; // <-- Додай useState
import { useHangman } from '../hooks/useHangman'; //
import HangmanVisual from '../components/HangmanVisual'; //
import WordDisplay from '../components/WordDisplay'; //
import Keyboard from '../components/Keyboard'; //
import ResultsModal from '../components/ResultsModal'; // <-- Імпорт модалки

// 1. Приймаємо нові props від App.jsx
const GamePage = ({ wordToGuess, onNewGame, onGoToMenu }) => {
  
  const {
    guessedLetters,
    wrongLetters,
    mistakesCount,
    isGameWon,
    isGameLost,
    guessLetter, 
  } = useHangman(wordToGuess); //
  
  // 2. Стан для контролю видимості модалки
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 3. Змінюємо useEffect, щоб він показував модалку, а не навігував
  useEffect(() => {
    // Не робимо нічого, якщо гра не завершена
    if (!isGameWon && !isGameLost) {
      setIsModalOpen(false); // Ховаємо модалку, якщо почалася нова гра
      return;
    }
    
    // Встановлюємо затримку, щоб гравець побачив анімацію поразки
    const timer = setTimeout(() => {
      setIsModalOpen(true); // Показуємо модалку
    }, isGameWon ? 1000 : 3000); // 1с для перемоги, 3с для поразки

    return () => clearTimeout(timer);
    
  }, [isGameWon, isGameLost]); // (адаптовано)

  // 4. Функції, які ми передамо в модалку
  const handlePlayAgain = () => {
    setIsModalOpen(false);
    onNewGame(); // Запускаємо нову гру (змінюємо слово)
  }

  const handleGoToMenu = () => {
    setIsModalOpen(false);
    onGoToMenu();
  }

  return (
    <div className="game-page">
      {isModalOpen && (
        <ResultsModal 
          isWin={isGameWon}
          wordToGuess={wordToGuess}
          onPlayAgain={handlePlayAgain}
          onGoToMenu={handleGoToMenu}
        />
      )}

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
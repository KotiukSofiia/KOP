import React, { useEffect, useState } from 'react'; 
import { useHangman } from '../hooks/useHangman'; 
import HangmanVisual from '../components/HangmanVisual'; 
import WordDisplay from '../components/WordDisplay'; 
import Keyboard from '../components/Keyboard'; 
import ResultsModal from '../components/ResultsModal'; 

const GamePage = ({ wordToGuess, onNewGame, onGoToMenu }) => {
  
  const {
    guessedLetters,
    wrongLetters,
    mistakesCount,
    isGameWon,
    isGameLost,
    guessLetter, 
  } = useHangman(wordToGuess); 
  
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    if (!isGameWon && !isGameLost) {
      setIsModalOpen(false); 
      return;
    }
    
    const timer = setTimeout(() => {
      setIsModalOpen(true); 
    }, isGameWon ? 1000 : 3000); 

    return () => clearTimeout(timer);
    
  }, [isGameWon, isGameLost]); 

  const handlePlayAgain = () => {
    setIsModalOpen(false);
    onNewGame(); 
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
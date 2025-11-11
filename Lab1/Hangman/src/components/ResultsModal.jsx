import React from 'react';
import { createPortal } from 'react-dom';

// Стилі для модального вікна (можна винести в CSS)
const modalStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalContentStyles = {
  background: 'white',
  padding: '2rem 3rem',
  borderRadius: '8px',
  textAlign: 'center',
  color: '#333',
};

// 1. Отримуємо DOM-елемент для порталу
const modalRoot = document.getElementById('modal-root');

const ResultsModal = ({ isWin, wordToGuess, onPlayAgain, onGoToMenu }) => {
  
  const content = (
    <div style={modalStyles}>
      <div style={modalContentStyles}>
        {isWin ? (
          <h1>WIN!!!</h1>
        ) : (
          <h1>GAME OVER!</h1>
        )}
        <p>The correct word was: <strong>{wordToGuess}</strong></p>
        
        {/* Кнопки, як вимагалось у завданні */}
        <button onClick={onPlayAgain}>Play Again</button>
        <button onClick={onGoToMenu} style={{backgroundColor: '#6c757d'}}>Main Menu</button>
      </div>
    </div>
  );

  // 2. Використовуємо createPortal
  return createPortal(content, modalRoot);
};

export default ResultsModal;
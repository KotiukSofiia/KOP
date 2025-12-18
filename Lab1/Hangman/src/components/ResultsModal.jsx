import React from 'react';
import Modal from './ui/Modal';
import styles from './ResultsModal.module.css';
import buttonStyles from '../styles/Button.module.css';

const ResultsModal = ({ isWin, wordToGuess, onPlayAgain, onGoToMenu }) => {
  return (
    <Modal isOpen={true} onClose={onGoToMenu}>
      <div className={styles.contentContainer}>
        <h2 className={isWin ? styles.titleWin : styles.titleLoss}>
          {isWin ? 'YOU WON! 🎉' : 'GAME OVER 💀'}
        </h2>

        <p className={styles.wordText}>
          The correct word was: <strong className={styles.wordHighlight}>{wordToGuess}</strong>
        </p>

        <div className={styles.buttons}>
          <button className={buttonStyles.primary} onClick={onPlayAgain}>
            Play Again
          </button>
          <button className={buttonStyles.secondary} onClick={onGoToMenu}>
            Main Menu
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ResultsModal;
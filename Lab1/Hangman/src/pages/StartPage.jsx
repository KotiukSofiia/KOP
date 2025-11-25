import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import HangmanVisual from '../components/HangmanVisual';
import pageStyles from './StartPage.module.css';
import buttonStyles from '../styles/Button.module.css';

const StartPage = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate(); 

  const handleStartGame = () => {
    if (userName.trim()) {
      navigate(`/game/${userName}`);
    } else {
      alert('Please enter your name!');
    }
  };

  const handleGoToSettings = () => {
    navigate('/settings');
  };

  return (
    <div className={pageStyles.startPage}>
      <div className={pageStyles.header}>
        <h1 className={pageStyles.title}>Hangman</h1>
        <p className={pageStyles.subtitle}>
          Guess the word before the little guy runs out of chances.
        </p>
      </div>

      <div className={pageStyles.visualWrapper}>
        <HangmanVisual mistakesCount={6} animateStartPage={true} />
      </div>

      <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <label htmlFor="username" style={{color: '#555', fontSize: '0.9rem'}}>Enter your name:</label>
        <input 
          id="username"
          type="text" 
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className={pageStyles.inputField} 
          placeholder="User Name"
        />
      </div>

      <p className={pageStyles.hint}>Click “Start” to begin a new game.</p>

      <div className={pageStyles.buttonsRow}>
        <button
          className={buttonStyles.primary}
          onClick={handleStartGame}
        >
          Start
        </button>
        <button
          className={buttonStyles.secondary}
          onClick={handleGoToSettings}
        >
          Settings
        </button>
      </div>
    </div>
  );
};

export default StartPage;
import React from 'react';
import HangmanVisual from '../components/HangmanVisual'; 

const StartPage = ({ onStartGame, onGoToSettings }) => {
  return (
    <div className="start-page">
      <h1>HANGMAN</h1>      
      <HangmanVisual mistakesCount={6} animateStartPage={true} /> 
      <p>Click to start!</p>
      <button onClick={onStartGame}>Start</button>
      <button onClick={onGoToSettings} style={{backgroundColor: '#6c757d'}}>Settings</button>
    </div>
  );
};

export default StartPage;
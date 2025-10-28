import React from 'react';
import HangmanVisual from '../components/HangmanVisual'; 

const StartPage = ({ onStartGame }) => {
  return (
    <div className="start-page">
      <h1>HANGMAN</h1>      
      <HangmanVisual mistakesCount={6} animateStartPage={true} />
      <p>Click to start!</p>
      <button onClick={onStartGame}>Start</button>
    </div>
  );
};

export default StartPage;
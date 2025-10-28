import React from 'react';

const ResultsPage = ({ isWin, onPlayAgain, wordToGuess }) => {
  return (
    <div className="results-page">
      {isWin ? (
        <h1>WIN!!!</h1>
      ) : (
        <h1>GAME OVER!</h1>
      )}
       <p>The correct word was: <strong>{wordToGuess}</strong></p>
      <button onClick={onPlayAgain}>Play Again</button>
    </div>
  );
};

export default ResultsPage;
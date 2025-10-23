import React from 'react';

const ResultsPage = ({ isWin, onPlayAgain, wordToGuess }) => {
  return (
    <div className="results-page">
      {isWin ? (
        <h1>Congratulations! You won!🥳</h1>
      ) : (
        <h1>Unfortunately, you lost...😥</h1>
      )}
       <p>The correct word was: <strong>{wordToGuess}</strong></p>
      <button onClick={onPlayAgain}>Play Again</button>
    </div>
  );
};

export default ResultsPage;
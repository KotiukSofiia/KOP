import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/useGameStore';
import styles from './LeaderboardPage.module.css';
import buttonStyles from '../styles/Button.module.css';

const LeaderboardPage = () => {
  const navigate = useNavigate();
  const history = useGameStore((state) => state.history);
  const clearHistory = useGameStore((state) => state.clearHistory);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Leaderboard</h1>
        <button className={buttonStyles.secondary} onClick={() => navigate('/')}>
          Back to Menu
        </button>
      </div>

      {history.length === 0 ? (
        <p>No games played yet.</p>
      ) : (
        <>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Player</th>
              <th>Word</th>
              <th>Difficulty</th>
              <th>Result</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {history.map((game) => (
              <tr key={game.id}>
                <td>{game.playerName}</td>
                <td>{game.word}</td>
                <td>{game.difficulty}</td>
                <td className={game.result === 'Win' ? styles.win : styles.loss}>
                  {game.result}
                </td>
                <td>{game.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button 
          onClick={clearHistory} 
          style={{marginTop: '20px', background: 'none', border: 'none', color: 'red', cursor: 'pointer'}}
        >
          Clear History
        </button>
        </>
      )}
    </div>
  );
};

export default LeaderboardPage;
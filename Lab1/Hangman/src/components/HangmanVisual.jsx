import React from 'react';
import styles from './HangmanVisual.module.css';

const HangmanVisual = ({ mistakesCount, animateStartPage = false, animateOnLoss = false }) => {
  
  const hideText = animateStartPage; 

  let animationClass = '';
  if (animateStartPage) {
    animationClass = styles.slowSwing;
  } else if (animateOnLoss) {
    animationClass = styles.fastSwing;
  }
  
  return (
    <div className={styles.container}>
      <svg className={styles.svg}>
        {/* лінії шибениці */}
        <line x1="60" y1="230" x2="140" y2="230" />
        <line x1="100" y1="230" x2="100" y2="50" />
        <line x1="100" y1="50" x2="180" y2="50" />
        <line x1="180" y1="50" x2="180" y2="80" />

        {/*анімація */}
        <g className={animationClass}>
          {mistakesCount > 0 && <circle cx="180" cy="100" r="20" />}
          {mistakesCount > 1 && <line x1="180" y1="120" x2="180" y2="170" />}
          {mistakesCount > 2 && <line x1="180" y1="130" x2="160" y2="150" />}
          {mistakesCount > 3 && <line x1="180" y1="130" x2="200" y2="150" />}
          {mistakesCount > 4 && <line x1="180" y1="170" x2="160" y2="190" />}
          {mistakesCount > 5 && <line x1="180" y1="170" x2="200" y2="190" />}
        </g>
      </svg>
      
      {!hideText && <p className={styles.text}>Number of errors: {mistakesCount}</p>}
    </div>
  );
};

export default HangmanVisual;
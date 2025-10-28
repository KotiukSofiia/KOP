import React from 'react';

const svgStyle = {
  stroke: '#333',
  strokeWidth: 4,
  fill: 'none',
  strokeLinecap: 'round',
};

const animationCss = `
  @keyframes person-swing-slow {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(2deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(-2deg); }
    100% { transform: rotate(0deg); }
  }
  .animated-person-slow {
    transform-origin: 180px 80px; 
    animation: person-swing-slow 4s ease-in-out infinite;
  }


  @keyframes person-swing-fast {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(5deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
  }
  .animated-person-fast {
    transform-origin: 180px 80px; 
    animation: person-swing-fast 1.5s ease-in-out infinite; /* Швидше */
  }
`;

const HangmanVisual = ({ mistakesCount, animateStartPage = false, animateOnLoss = false }) => {
  
  const hideText = animateStartPage; 

  let animationClass = '';
  if (animateStartPage) {
    animationClass = 'animated-person-slow';
  } else if (animateOnLoss) {
    animationClass = 'animated-person-fast';
  }
  
  const shouldAnimate = animateStartPage || animateOnLoss;

  return (
    <div className="hangman-visual">
      <svg height="250" width="250" style={svgStyle}>
        {shouldAnimate && <style>{animationCss}</style>}

        <line x1="60" y1="230" x2="140" y2="230" />
        <line x1="100" y1="230" x2="100" y2="50" />
        <line x1="100" y1="50" x2="180" y2="50" />
        <line x1="180" y1="50" x2="180" y2="80" />

        <g className={animationClass}>
          {mistakesCount > 0 && <circle cx="180" cy="100" r="20" />}
          {mistakesCount > 1 && <line x1="180" y1="120" x2="180" y2="170" />}
          {mistakesCount > 2 && <line x1="180" y1="130" x2="160" y2="150" />}
          {mistakesCount > 3 && <line x1="180" y1="130" x2="200" y2="150" />}
          {mistakesCount > 4 && <line x1="180" y1="170" x2="160" y2="190" />}
          {mistakesCount > 5 && <line x1="180" y1="170" x2="200" y2="190" />}
        </g>
      </svg>
      

      {!hideText && <p style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Number of errors: {mistakesCount}</p>}
    </div>
  );
};

export default HangmanVisual;
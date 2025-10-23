import React from 'react';

const svgStyle = {
  stroke: '#333',
  strokeWidth: 4,
  fill: 'none',
  strokeLinecap: 'round',
};

const animationCss = `
  @keyframes person-swing {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(2deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(-2deg); }
    100% { transform: rotate(0deg); }
  }

  .animated-person {
    transform-origin: 180px 80px; 
    animation: person-swing 4s ease-in-out infinite;
  }
`;

const HangmanVisual = ({ mistakesCount, animate = false }) => {
  const hideText = animate; 

  return (
    <div className="hangman-visual">
      <svg height="250" width="250" style={svgStyle}>
        {animate && <style>{animationCss}</style>}

        <line x1="60" y1="230" x2="140" y2="230" /> {/* основа */}
        <line x1="100" y1="230" x2="100" y2="50" />  {/* стовп */}
        <line x1="100" y1="50" x2="180" y2="50" />   {/* перекладина */}
        <line x1="180" y1="50" x2="180" y2="80" />   {/* мотузка */}

        <g className={animate ? 'animated-person' : ''}>
          {mistakesCount > 0 && <circle cx="180" cy="100" r="20" />} {/* голова */}
          {mistakesCount > 1 && <line x1="180" y1="120" x2="180" y2="170" />} {/* тіло */}
          {mistakesCount > 2 && <line x1="180" y1="130" x2="160" y2="150" />} {/* ліва рука */}
          {mistakesCount > 3 && <line x1="180" y1="130" x2="200" y2="150" />} {/* права рука */}
          {mistakesCount > 4 && <line x1="180" y1="170" x2="160" y2="190" />} {/* ліва нога */}
          {mistakesCount > 5 && <line x1="180" y1="170" x2="200" y2="190" />} {/* права нога */}
        </g>
      </svg>
      {!hideText && <p style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Number of errors:{mistakesCount}</p>}
    </div>
  );
};

export default HangmanVisual;
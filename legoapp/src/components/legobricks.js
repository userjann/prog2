import React, { useEffect, useRef } from 'react';
import { gsap, random } from 'gsap';
import brick from '../images/brick.png';
import RedBrick from '../images/brickR.png';
import BlueBrick from '../images/blueBrick.png';

function LegoBrick({ delay, positionX = Math.random() * 100, positionY = Math.random() * -100 }) {
  const brickRef = useRef(null);

  const brickImages = [brick, RedBrick, BlueBrick];
  const randomImage = brickImages[Math.floor(Math.random() * brickImages.length)];

  useEffect(() => {
    gsap.fromTo(
      brickRef.current,
      {
        y: positionY,
        x: `${positionX}vw`,
        rotation: 1,
        opacity: 1,
      },
      {
        y: '100vh',
        rotation: 100,
        opacity: 1,
        duration: 5,
        delay: delay,
        repeat: 0,
        ease: 'power1.in',
      }
    );
  }, [delay, positionX, positionY]);

  return (
    <div ref={brickRef} className="absolute" style={{ center: `${positionX}vw` }}>
      <img
        src={randomImage}
        alt="brick"
        className="max-w-xs"
        style={{
          transform:
            randomImage === RedBrick
              ? 'scale(0.7)'
              : randomImage === BlueBrick
              ? 'scale(0.5)'
              : 'scale(1)',
        }}
      />
    </div>
  );
}


function LegoAnimation() {
  // Definiere Positionen der Steine als Array
  const positions = [
    { x: 10, y: -50 }, 
    { x: 20, y: -30 },
    { x: 30, y: -40 },
    { x: 40, y: -20 },
    { x: 50, y: -10 },
    { x: 60, y: -70 },
    { x: 70, y: -60 },
    { x: 80, y: -90 },
    { x: 90, y: -80 },
    { x: 5, y: -100 },
    { x: 10, y: -50 },
    { x: 20, y: -30 },
    { x: 30, y: -40 },
    { x: 40, y: -20 },
    { x: 50, y: -10 },
    { x: 60, y: -70 },
    { x: 70, y: -60 },
    { x: 80, y: -90 },
    
    { x: 60, y: -70 },
    { x: 70, y: -60 },
    { x: 80, y: -90 },
    { x: 90, y: -80 },
    { x: 5, y: -100 },
    { x: 10, y: -50 },
    { x: 20, y: -30 },
    { x: 30, y: -40 },
    { x: 40, y: -20 },
    { x: 50, y: -10 },
    { x: 60, y: -70 },
    { x: 70, y: -60 },
    { x: 80, y: -90 },
    { x: 90, y: -80 },
    { x: 5, y: -100 },
    { x: 10, y: -50 }, 
    { x: 20, y: -30 },
    { x: 30, y: -40 },
    { x: 40, y: -20 },

    // Weitere Positionen hinzufügen
  ];

  return (
    <div className="relative h-screen overflow-hidden bg-gray-200">
      {/* Übergebe Positionen explizit */}
      {positions.map((pos, i) => (
        <LegoBrick key={i} positionX={pos.x} positionY={pos.y} delay={Math.random() * 2} />
      ))}
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="font-bold text-8xl">Lego Star Wars</h1>
      </div>
    </div>
  );
}

export default LegoAnimation;

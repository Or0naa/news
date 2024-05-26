"use client";
import React, { useEffect, useState } from 'react';

export default function FlashNavContent({ flashes }) {
  const [currentFlashes, setCurrentFlashes] = useState(flashes.slice(0, 4));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 4) % flashes.length;
        setCurrentFlashes(flashes.slice(newIndex, newIndex + 4));
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [flashes]);

  return (
    <div>
      <h1 className='flex justify-center items-center mb-2 text-2xl'>מבזקים</h1>
      <div id="flash-container" className="text-theme-accent min-h-screen flex flex-col gap-2 p-3 items-center">
        {currentFlashes.map((flash) => (
          <div key={flash.id} dir='auto' className="flash-item fade-in-up w-full flex flex-col items-center justify-center p-8 border-4 bg-theme-light border-theme-dark" style={{ height: '25vh' }}>
            {flash.title}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.5s ease-in-out;
        }

        .flash-item {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}

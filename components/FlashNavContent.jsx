"use client";
import React, { useEffect, useState } from 'react';

export default function FlashNavContent({ flashes }) {
  const [currentFlashes, setCurrentFlashes] = useState(flashes.slice(0, 4));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % flashes.length;
        setCurrentFlashes(flashes.slice(newIndex, newIndex + 4));
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [flashes]);

  return (
    <div>
      <div id="flash-container" className="text-theme-accent min-h-36 flex flex-col gap-1 p-2 items-center bg-theme-light rounded-lg border-2 border-theme-dark">
        {currentFlashes.map((flash) => (
          <div key={flash.id} className="flash-item fade-in-up w-full flex flex-col items-center gap-1">
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
      `}</style>
    </div>
  );
}

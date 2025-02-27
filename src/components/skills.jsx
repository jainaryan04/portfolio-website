import React, { useEffect, useState, useRef } from 'react';

const Skills = ({ 
  media, 
  changeSpeed = 900, 
  className = "" 
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    if (media.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % media.length);
      }, changeSpeed);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [media.length, changeSpeed]);

  if (media.length === 0) return null;

  const currentMedia = media[currentIndex];
  const isVideo = /\.(mp4|webm|ogg)$/i.test(currentMedia);

  return (
    <div 
      className={`absolute  z-50 overflow-hidden ${className}`} 
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        transition: 'opacity 0.1s ease-in-out',
      }}
    >
      {isVideo ? (
        <video 
          src={currentMedia} 
          className="max-h-32 object-cover rounded-xl" 
          autoPlay 
          loop 
          muted 
          playsInline
        />
      ) : (
        <img 
          src={currentMedia} 
          alt="Following cursor"
          className="max-h-32 object-cover rounded-xl"
        />
      )}
    </div>
  );
};

export default Skills;

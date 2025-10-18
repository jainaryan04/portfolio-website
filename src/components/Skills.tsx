import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

type SkillsProps = {
  media: string[];
  changeSpeed?: number;
  className?: string;
};

type Position = {
  x: number;
  y: number;
};

const Skills: React.FC<SkillsProps> = ({
  media,
  changeSpeed = 900,
  className = "",
}) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
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
      className={`absolute z-50 overflow-hidden ${className}`}
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
        <Image
          src={currentMedia}
          width={128}
          height={128}
          alt="Following cursor"
          className="object-cover rounded-xl"
        />
      )}
    </div>
  );
};

export default Skills;

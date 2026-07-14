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
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();

    window.addEventListener('resize', updateIsMobile);

    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent): void => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isMobile]);

  useEffect(() => {
    if (media.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % media.length);
      }, changeSpeed);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [media.length, changeSpeed]);

  if (media.length === 0) return null;

  const currentMedia = media[currentIndex];
  const isVideo = /\.(mp4|webm|ogg)$/i.test(currentMedia);

  return (
    <div
      className={`z-50 overflow-hidden ${className} ${isMobile ? 'fixed bottom-6 left-1/2 -translate-x-1/2' : 'absolute'}`}
      style={
        isMobile
          ? {
              pointerEvents: 'none',
              transition: 'opacity 0.1s ease-in-out',
            }
          : {
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              transition: 'opacity 0.1s ease-in-out',
            }
      }
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

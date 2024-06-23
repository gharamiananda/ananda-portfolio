 "use client"

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 100], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      y.set(window.scrollY);
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [y]);

  return (
    <motion.div
      ref={cursorRef}
      className="cursor hidden sm:block"
      initial={{ opacity: 0 ,dur:1}}
      animate={{ opacity: 1, }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '30px',
        height: '30px',
        // backgroundColor: 'white',
        border:'2px solid white',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      
    >
        
        </motion.div>
  );
};

export default CustomCursor;

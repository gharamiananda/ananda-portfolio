 "use client"

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 100], [1, 0]);



  function sparkAnimation(event:any){
    let i =document.createElement('i');

    i.style.left = event.pageX + 'px';
    i.style.top = event.pageY + 'px';
    i.style.scale = `${Math.random()*2+1}`;
    i.style.setProperty('--x',getRandomTransitionValue());
    i.style.setProperty('--y',getRandomTransitionValue());

document.body.appendChild(i);

setTimeout(() =>{
  document.body.removeChild(i);
},2000)

  }

  function getRandomTransitionValue(){
    return `${Math.random() * 400 +-200}px`;
  }

  useEffect(() => {
    // const handleMouseMove = (event: MouseEvent) => {
    //   if (cursorRef.current) {
    //     cursorRef.current.style.left = `${event.clientX}px`;
    //     cursorRef.current.style.top = `${event.clientY}px`;
    //   }
      
    // };

    // const handleScroll = () => {
    //   setScrollY(window.scrollY);
    //   y.set(window.scrollY);
    // };

    document.addEventListener('mousemove', sparkAnimation);
  // return  document.removeEventListener('mousemove', sparkAnimation);

    // window.addEventListener('scroll', handleScroll);

    // return () => {
    //   document.removeEventListener('mousemove', sparkAnimation);
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
   <></>
  );
};

export default CustomCursor;

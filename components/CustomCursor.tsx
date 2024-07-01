/* eslint-disable react-hooks/exhaustive-deps */
 "use client"

import React, { useEffect } from 'react';

const CustomCursor: React.FC = () => {
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
    document.addEventListener('mousemove', sparkAnimation);
  }, []);

  return (
   <></>
  );
};

export default CustomCursor;

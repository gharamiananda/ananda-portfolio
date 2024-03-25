"use client"
import { motion, useAnimation, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProjectBtn from "../sub/ProjectBtn";

interface Card {
  src: string;
  title: string;
  description: string;
}

const ProjectSlider: React.FC = () => {
  const [positionIndexes, setPositionIndexes] = useState<number[]>([0, 1, 2, 3, 4]);
  const dragControls = useAnimation();
  const sliderWrapperRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Adjust interval duration as needed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const unsubscribeX = x.onChange((latest) => {
      dragControls.start({ x: latest });
    });

    return () => unsubscribeX();
  }, [x, dragControls]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );
      return updatedIndexes;
    });
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <>
    <div
          className="flex flex-col items-center justify-center"

    id="projects"
  >
    <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
      My Projects
    </h1>
    </div>
    <motion.div
      className="relative flex items-center justify-center h-screen overflow-hidden"
      drag="x"
      dragConstraints={{
        left: 0,
        right: sliderWrapperRef.current
          ? sliderWrapperRef.current.offsetWidth
          : 0,
      }}
      dragElastic={0.2}
      style={{ x }}
      ref={sliderWrapperRef}
    >
      
      {[
        {
          src: "/NextWebsite.png",
          title: "Modern Next.js Portfolio",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          src: "/propertycontroll.png",
          title: "property control",
          description:
            "It is web app for properties management, here 4 role, owner, tenenant, manager, worker,",
        },
        {
          src: "/hrms.png",
          title: "hrms -employee management website",
          description:
            "It is web app for employee management, employee esi, epf salary deduction all are calculated here, emplye employee leave calculation",
        },
        {
          src: "/knighthunt.png",
          title: "knighthunt - Ecommerce website",
          description:
            "It is a ecommerce website for mainly Tshirts, it is build with nextjs with typescript with postgresql database",
        },
        {
          src: "/CardImage.png",
          title: "Interactive Website Cards",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ].map((card: Card, index: number) => (
        <motion.div
          key={index}
          className="rounded-[12px] absolute md:w-[40%] w-full"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src={card.src}
            alt={card.title}
            width={1000}
            height={1000}
            className="w-full object-contain"
      />

<motion.div className="absolute  left-50 bottom-0 p-4 w-100 h-full bg-blue-800"
    whileHover={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h1 className="text-2xl font-semibold text-white">{card.title}</h1>
    <p className="mt-2 text-gray-300">{card.description}</p>
  </motion.div>
      <div className="absolute left-4 bottom-4">

      <ProjectBtn />
      </div>

   
    </motion.div>
       
      ))}
      <div className="flex flex-row gap-3 mt-64">
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4 "
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </motion.div>
    </>
  );
};

export default ProjectSlider;
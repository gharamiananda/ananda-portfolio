"use client"
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProjectBtn from "../sub/ProjectBtn";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";


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
      className="relative flex items-center justify-center overflow-hidden"
      // drag="x"
      // dragConstraints={{
      //   left: 0,
      //   right: sliderWrapperRef.current
      //     ? sliderWrapperRef.current.offsetWidth
      //     : 0,
      // }}
      // dragElastic={0.2}
      style={{ x }}
      ref={sliderWrapperRef}
    >
      
      {[
        {
          src: "/blloddonation.png",
          title: "Blood Donation System",
          slug:"blood-donation-system",
          description:
            "Web app for blood donation system, it is build with nextjs with postgresql database",
        },
        {
          src: "/propertycontroll.png",
          title: "property control",
          slug:"propertycontrol",

          description:
            "It is web app for properties management, here 4 role, owner, tenenant, manager, worker,",
        },
        {
          src: "/hrms.png",
          title: "hrms -employee management website",
          slug:"hrms-employee-management",

          description:
            "It is web app for employee management, employee esi, epf salary deduction all are calculated here, emplye employee leave calculation",
        },
        {
          src: "/knighthunt.png",
          title: "knighthunt - Ecommerce website",
          slug:"ecommerce-website-techwens",

          description:
            "It is a ecommerce website for mainly Tshirts, it is build with nextjs with typescript with postgresql database",
        },
        {
          src: "/techwenssite.png",
          title: "Techwens Website",
          slug:"techwens-website",

          description:
            "COmpany website for tech wens, it is build with nextjs with postgresql database",
        },
      ].map(({title,description,src,slug}: any, index: number) => (
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
       <>
       <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${src})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={'https://github.com/gharamiananda'}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={'/'+slug}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
    {positions[positionIndexes[index]]==='center' &&   <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>}
    </div>
       
       </>

   
    </motion.div>
       
      ))}
      <div className="flex flex-row gap-3 mt-64 ">
      

<motion.div
      initial="hidden"
      animate="visible"
      className="flex   flex-row items-center justify-center px-20 mt-40 w-full z-[20] gap-10"
    >
        <motion.a
          onClick={handleBack}

          variants={slideInFromRight(1)}
          className="py-2 px-4  button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
Prev        </motion.a>

        <motion.a
                  onClick={handleNext}

          variants={slideInFromLeft(1)}
          className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
Next        </motion.a>

</motion.div>
      </div>
    </motion.div>
    </>
  );
};

export default ProjectSlider;

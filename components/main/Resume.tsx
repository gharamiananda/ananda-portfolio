
'use client'


import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';


import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences } from '@/constants';
import { SectionWrapper } from '@/hoc';
import { slideInFromTop, textVariant } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import "react-vertical-timeline-component/style.min.css";

// import { styles } from "../styles";
// import { experiences } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }:any) => {
  const[mount,setIsMOunt]=useState(false)

  useEffect(()=>{
    setIsMOunt(true)
  },[]);
  if(!mount){
    return null
  }
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image
          height={60}
          width={60}

            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point:string, index:number) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const {ref, inView} = useInView({
    triggerOnce: true
})
  return (
    <>
      <motion.div variants={textVariant(0)}>
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      
      
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px]  px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-center  text-[13px]">
          What I have done so far
          </h1>
        </motion.div>
        </div>
        <h1 className="text-[40px] text-center  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Work Experience.
      </h1>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline animate={false}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
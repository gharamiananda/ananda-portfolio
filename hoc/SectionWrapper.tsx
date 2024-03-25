import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


// import { styles } from "../styles";
import { styles } from "@/components/main/styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component:any, idName:string) =>

  function HOC() {

const {ref, inView} = useInView({
    triggerOnce: true
})
    return (
      <motion.section
        variants={staggerContainer(0,0)}
        // initial='hidden'
        // whileInView='show'
        viewport={{ once: true, amount: 0.25 }}

  ref={ref}
//   initial="hidden"
//   variants={imageVariants}
  animate={inView ? "visible" : "hidden"}
//   custom={index}
//   transition={{delay: index * animationDelay}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;

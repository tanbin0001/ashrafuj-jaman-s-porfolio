import {motion} from 'framer-motion';

const title ={
    initial: {
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren:0.08,
        }
    }
}
const singleWord ={
    initial: {
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
        duration:1
        }
    }
}

const AnimatedText = ({ text, className = "" }) => {
    return (
      <div className="w-full mx-auto py-2 flex  items-center justify-center sm:py-0 text-center overflow-hidden">
        <motion.h1 variants={title} initial='initial' animate='animate' className={`inline-block dark:text-light w-full text-dark font-bold capitalize text-5xl ${className}`}>
          {text.split(" ").map((word, index) => (
            <motion.span className="inline-block" key={index} 
            variants={singleWord}  
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>
      </div>
    );
  };
  
  export default AnimatedText;
  
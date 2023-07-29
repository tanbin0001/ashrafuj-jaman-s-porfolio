import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";





const Details = ({type, time, place, info}) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%]  md:w-[80%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">{type} </h3>
                <span className="uppercase font-medium text-dark/75 dark:text-light/75 xs:text-sm">

                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm">{info}</p>
            </motion.div>
        </li>
    )

}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["Start end", "center start"]
        }

    )
    return (
        <div className="my-64">
            <h2 className="font-bold text-5xl mb-32 w-full text-center">&lt;/Education&gt;</h2>

            <div ref={ref} className="w-[75%]  lg:w-[90%] md:w-full mx-auto relative">
                <motion.div
                    style={{ scaleY: 1 - scrollYProgress }}
                    className="dark:bg-light absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px]xs:left-[20px]" />
                <ul className="w-full flex-col items-center flex justify-between ml-4  xs:ml-2">

                <Details
                        type='Complete Web Development Course' 
                        time='2022,Dec-2023-June'
                        place='Programming Hero'
                         info=" Completed the comprehensive web development course at Programming Hero, covering HTML, CSS, JavaScript, React, Node.js, and more. Acquired hands-on experience in building full-stack web applications and working on real-world projects."
                       
                    />
                  
                  <Details
                        type='Cyber Security and Ethical Hacking' 
                        time='2021,Nov-2022-Mar'
                        place='Arena Web Security'
                         info="Completed Cyber Security and Ethical Hacking course at Arena Web Security, Nov 2021 - Mar 2022. Proficient in penetration testing, network security, and cryptography. Hands-on experience in identifying and mitigating security vulnerabilities."
                       
                    />
                  

                    <Details
                        type='Secondary School Certificate' 
                        time='2020-2021'
                        place='Rose Garden Academy'
                         info="Successfully completed my Secondary School Certificate (SSC) from Rose Garden Academy. Acquired a solid foundation in various subjects, including Mathematics, Science, English, and Social Studies. Developed essential study skills and teamwork abilities during my time at the academy."
                       
                    />
              

                </ul>
            </div>
        </div>
    );
};

export default Education;
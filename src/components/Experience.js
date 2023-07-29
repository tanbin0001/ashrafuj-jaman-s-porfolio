import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";





const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%]  mx-auto flex flex-col items-center justify-between ">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">{position}&nbsp;<a href={companyLink} target='_blank' className="text-primary dark:text-primaryDark capitalize">@{company}</a> </h3>
                <span className="uppercase font-medium text-dark/75 dark:text-light/75 xs:text-sm">

                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">{work}</p>
            </motion.div>
        </li>
    )

}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["Start end", "center start"]
        }

    )
    return (
        <div className="my-64">
            <h2 className="font-bold text-5xl mb-32 w-full xs:text-3xl md:mb-16 text-center">&lt;/Experience&gt;</h2>

            <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
                <motion.div
                    style={{ scaleY: 1 - scrollYProgress }}
                    className= "dark:bg-light  absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px]xs:left-[20px]" />
                <ul className="w-full flex-col items-center flex justify-between ml-4 xs:ml-2 ">
                    <Details
                        position='Associate Software Engineer' company='Nasheed Station'
                        companyLink='https://www.nasheedstation.com/'
                        time='  2023-Present' address='Islamabad, Pakistan'
                        work=' Working as an Angular Developer on a team responsible for developing new features for Nasheed Station'
                    />
                    <Details
                        position='Project Developer' company='DEVxHUB'
                        companyLink='https://sharparchive.com/'
                        time='  2022' address='Rajshahi, Bangladesh'
                        work="I've worked on this project and it was great to develop a project like this one"
                    />

                </ul>
            </div>
        </div>
    );
};

export default Experience;
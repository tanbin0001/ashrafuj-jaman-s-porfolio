import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skill";
import TransitionEffect from "@/components/TransitionEffect";
import { useInView, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import { useEffect, useRef } from "react";

{/* eslint-disable react/no-unescaped-entities */}

const AnimatedNumber = ({ value }) => {

  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);

    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (typeof latest === 'number' && ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
     
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
      <Head>
        <title>Ashrafuj Jaman | About page</title>
      </Head>

<TransitionEffect/>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText className="!text-5xl xs:!text-3xl mb-16 sm:mb-8" text='&lt;/About Me&gt;' />
          <div className="grid grid-cols-8 xl:col-span-4 gap-16 sm:gap-8 w-full ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
              <p className="font-medium">
                Hi, I'm Ashrafuj Jaman Tanbin, a MERN Stack Developer with a passion for creating beautiful
                with a passion for creating beautiful, functional,
                and user-centered digital experiences. With 2 years of experience in the field. I am always looking for
                new and innovative ways to bring my clients' visions to life.
              </p>
              <p className="my-4 font-medium">
                I've learned so many things on this journey. Currently Iam working as an Angular Developer. I always try to challenge myself.
              </p>

              <p className="my-4 font-medium">
                Whether I'm working on a website, mobile app, or
                other digital product, I bring my commitment to design excellence and user-centered thinking to
                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <div className="col-span-3 my-auto relative xl:col-span-4 md:order-1 md:col-span-8 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%]  rounded-[2rem] bg-dark dark:bg-light dark:border-light" />
              <img src="https://files.catbox.moe/p56rzj.jpg" alt="tanbin" className="w-full h-auto rounded-2xl" />
            </div>


            <div className="col-span-2 xl:col-span-8 xl:flex-row xl:item-center md:order-3 flex flex-col items-center justify-between" >
              <div className="flex flex-col items-end xl:items-center justify-center  xl:text-center  ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75  dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Satisfied Clients</h2>
              </div>
              <div className="flex flex-col items-end justify-center  xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Projects Completed</h2>
              </div>
              <div className="flex flex-col items-end justify-center  xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Years of experience</h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education/>
        </Layout>
      </main>

    </>
  );
};

export default about;


//   const DummyComponent = () => {
//     return (
//       <div>
//
//       </div>
//     );
//   };

//   export default DummyComponent;
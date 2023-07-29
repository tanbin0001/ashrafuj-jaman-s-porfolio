import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";


const FramerImage = motion.img;

const FeaturedProject = ({ type, title, summary, img, link, githubLink }) => {
    return (
        <article className="w-full relative flex  items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-12 shadow-2xl rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light  xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <Link href={link} target='_blank'
                className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg"
            >
                 <FramerImage 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}} src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className="w-1/2 lg:w-full lg:pl-0 lg:pt-6 flex flex-col items-start justify-between pl-6">
                <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
                <Link href={link} target='_blank ' className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light"> <span className="font-bold ">Used Technologies:</span> {summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={githubLink} className="w-10 dark:text-light " target='_blank'> <GithubIcon /></Link>
                    <Link href={link} target='_blank'
                        className="ml-4 rounded-lg bg-dark text-light  dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
                    >Visit project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, summary, img, link, githubLink }) => {
    return (
        <article className="w-full flex flex-col justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative items-center dark:text-light xs:p-4" >
            <div className="absolute top-0 -right-3 md:-right-2 md:w-[101%] xs:h-[102%]  xs:rounded-[1.5rem] -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
            <Link href={link} target='_blank'
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                 <FramerImage 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}} src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg mg:text-base">{type}</span>
                <Link href={link} target='_blank ' className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center  justify-between w-full">
                    <Link href={link} target='_blank'
                        className=" text-lg md:text-base font-semibold underline"
                    >Visit</Link>
                    <Link href={githubLink} className="w-8 md:w-6" target='_blank'> <GithubIcon /></Link>

                </div>
            </div>
        </article>

    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Ashrafuj Jaman | Projects</title>
            </Head>
            <TransitionEffect/>
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16   ">
                    <AnimatedText className="!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl  mb-16" text='&lt;/Projects&gt;' />

                    <div className="grid grid-cols-32 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
                        <div className="col-span-12">
                            <FeaturedProject
                                title='Creative Canvas'
                                summary='HTML, CSS3, Tailwind, React, Express, Nodejs, MongoDb, Axios, React Query, Dev-tools, and GitHub.'
                                link='https://creative-canvas-e8237.web.app/'
                                type='Featured Project'
                                img='https://i.ibb.co/fGbxz6s/fafd.png'
                                githubLink='https://github.com/tanbin0001'
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title='Creative Canvas'
                                summary='HTML, CSS3, Tailwind, React, Express, Nodejs, MongoDb, Axios, React Query, Dev-tools, and GitHub.'
                                link='https://creative-canvas-e8237.web.app/'
                                type='Featured Project'
                                img='https://i.ibb.co/fGbxz6s/fafd.png'
                                githubLink='https://github.com/tanbin0001'
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title='Creative Canvas'
                                summary='HTML, CSS3, Tailwind, React, Express, Nodejs, MongoDb, Axios, React Query, Dev-tools, and GitHub.'
                                link='https://creative-canvas-e8237.web.app/'
                                type='Featured Project'
                                img='https://i.ibb.co/fGbxz6s/fafd.png'
                                githubLink='https://github.com/tanbin0001'
                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject
                                title='Creative Canvas'
                                summary='HTML, CSS3, Tailwind, React, Express, Nodejs, MongoDb, Axios, React Query, Dev-tools, and GitHub.'
                                link='https://creative-canvas-e8237.web.app/'
                                type='Featured Project'
                                img='https://i.ibb.co/fGbxz6s/fafd.png'
                                githubLink='https://github.com/tanbin0001'
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title='Creative Canvas'
                                summary='HTML, CSS3, Tailwind, React, Express, Nodejs, MongoDb, Axios, React Query, Dev-tools, and GitHub.'
                                link='https://creative-canvas-e8237.web.app/'
                                type='Featured Project'
                                img='https://i.ibb.co/fGbxz6s/fafd.png'
                                githubLink='https://github.com/tanbin0001'
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title='Creative Canvas'
                                summary='HTML, CSS3, Tailwind, React, Express, Nodejs, MongoDb, Axios, React Query, Dev-tools, and GitHub.'
                                link='https://creative-canvas-e8237.web.app/'
                                type='Featured Project'
                                img='https://i.ibb.co/fGbxz6s/fafd.png'
                                githubLink='https://github.com/tanbin0001'
                            />
                        </div>
                    </div>


                </Layout>

            </main>
        </>
    );
};

export default projects;
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";

const FramerImage = motion.img;

const MovingImage = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef();
    const handleMouse = (event) => {
        imgRef.current.style.display = "inline-block"
        x.set(event.pageX);
        y.set(-10);
    }
    const handleMouseLeave = (event) => {
        imgRef.current.style.display = "none"
        x.set(0);
        y.set(0);
    }



    return (
        <Link href={link} target='_blank'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="capitalize font-semibold text-xl hover:underline">{title}</h2>
            <FramerImage
          
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                ref={imgRef} src={img} alt="" className="w-96 z-10 h-auto hidden absolute rounded-lg" />
        </Link>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
   

        <motion.li
        initial={{ y: 50 }}
                whileInView={{ y: 0, transition:{duration:0.5 ,ease:"easeInOut"}}}
             
            className="relative w-full p-4 py-6 my-4 flex items-center justify-between bg-light dark:bg-dark dark:text-light text-dark dark:border-light rounded-xl first:mt-0 border border-solid border-dark  border-r-4   border-b-4 sm:flex-col">
            <MovingImage title={title} img={img} link={link} />
            <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">{date}</span>
        </motion.li>

    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className="col-span-1 w-full p-4 relative border border-solid bg-light dark:bg-dark dark:text-light dark:border-light border-dark rounded-2xl">
            <Link href={link} target='_blank'
                className="w-full cursor-pointer overflow-hidden rounded-lg inline-block"
            >
                <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
                <FramerImage
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    sizes="(max-width:768px) 100vw,
                    (max-width: 1200px)50vw, 50vw"
                    src={img} alt={title} className="w-full h-auto" />
            </Link>
            <Link href={link} target='_blank'
            >
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
                    {title}
                </h2>
                <p className="text-sm mb-2">{summary}</p>
                <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
            </Link>
        </li>
    )
}


const articles = () => {
    return (
        <>
            <Head>
                <title>Ashrafuj Jaman | Articles page</title>
            </Head>
            <TransitionEffect/>
            <main className="w-full mb-15 flex flex-col items-center justify-center overflow-hidden  dark:text-light
            ">
                <Layout className="pt-16  mx-16 ">
                    <AnimatedText text='&lt;/Articles&gt;' className="mb-16 sm:mb-8 sm:!text-4xl xs:!text-3xl " />
                    <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
                        <FeaturedArticle

                            title='Learn about Fiverr'
                            summary='Learn new and hidden tricks about fiverr'
                            time=' 9 min read'
                            link='/'
                            img='https://i.ibb.co/GFKTXxj/Purple-Pink-Modern-Programming-Webinar-Facebook-Post.png'
                        />

                        <FeaturedArticle

                            title='Ai Vs Human'
                            summary='Can Ai replace us?'
                            time=' 9 min read'
                            link='/'
                            img='https://i.ibb.co/CQMHs9D/1-ukea0-I3-YUSR17o-Zuc-MY03g.png'
                        />

                    </ul>
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
                        All Articles
                    </h2>
                    <ul>
                        <Article
                            title='What Is Higher Order Component (Hoc) In React?'
                            date='March 28,2023'
                            link='/'
                            img='https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/04/higher-order-components-diagram.jpg?ssl=1'
                        />
                        <Article
                            title='What Is Higher Order Component (Hoc) In React?'
                            date='March 28,2023'
                            link='/'
                            img='https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/04/higher-order-components-diagram.jpg?ssl=1'
                        />
                        <Article
                            title='What Is Higher Order Component (Hoc) In React?'
                            date='March 28,2023'
                            link='/'
                            img='https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/04/higher-order-components-diagram.jpg?ssl=1'
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}
export default articles;
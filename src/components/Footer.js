import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
    return (
      <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg py-2 mt-20  dark:text-light  dark:border-light sm:text-base">
      <Layout className="flex items-center justify-between lg:flex-col lg:py-6 ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
       <div className="flex items-center ">
      Build with <span className="text-red-600 px-1 text-2xl">&#9825;</span> <Link href='/'> by Ashrafuj Jaman Tanbin</Link>
       </div>
        <Link  href='https://www.linkedin.com/in/ashrafuj-jaman/' className="underline underline-offset-1" target="_blank">Say Hello</Link>
      </Layout>
      </footer>
    );
  };
  
  export default Footer;
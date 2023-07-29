import Link from "next/link";
import { CircularText } from "./Icons";

const HireMe = () => {
    return (
      <div className="fixed md:absolute left-4 bottom-4 flex items-center justify-normal overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:24 sm:right-0">
   <div className="w-36 h-auto flex items-center  justify-center relative md:w-24">
     <CircularText className={'fill-dark dark:fill-light animate-spin-slow'}/>

    <Link href='mailto:ashrafuj.jaman.tanbin1@gmail.com'
    className="flex justify-center items-center absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md  border border-solid border-dark dark:border-light w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:text-dark hover:dark:text-light hover:dark:bg-dark dark:bg-light md:w-12 md:h-12 md:text-[10px]"
    >Hire Me</Link>
   </div>
      </div>
    );
  };
  
  export default HireMe;
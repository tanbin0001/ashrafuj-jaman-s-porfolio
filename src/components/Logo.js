import Link from "next/link";



const Logo = () => {

    return (
        <div className="flex items-center justify-center md:-mr-20  mt-2">
            <Link href='/'
                className="w-16 h-16 border border-solid rounded-full border-transparent dark:border-light  "
            ><img className="rounded-full   " src="https://i.ibb.co/5x550J4/Blue-And-Yellow-Simple-Travel-Agency-Logo.png" alt="" /></Link>

        </div>
    );
};

export default Logo;
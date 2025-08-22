import Image from "next/image";
import React from "react";
import logo1 from "./asserts/logo-1.png";
import logo2 from "./asserts/logo-2.png";
import logo3 from "./asserts/logo-3.png";
import logo4 from "./asserts/logo-4.png";
import logo5 from "./asserts/logo-5.png";
import logo6 from "./asserts/logo-6.png";
import logo7 from "./asserts/logo-7.png";

const LogoSection = () => {
    return (
        <div className="md:mt-72 flex flex-col justify-center items-center md:gap-12 gap-6 px-4">
            <p className="text-gray-400 text-center text-sm sm:text-base max-w-[600px] mb-4 md:mb-0">
                Trusted by teams at over 1,000 of the world’s leading organizations
            </p>

            <div className="
                grid grid-cols-3 sm:grid-cols-4 md:flex 
                gap-6 sm:gap-8 items-center justify-center flex-wrap
            ">
                <Image src={logo1} alt="Logo sponsor" className="w-16 sm:w-20 h-auto" />
                <Image src={logo2} alt="Logo sponsor" className="w-16 sm:w-20 h-auto" />
                <Image src={logo3} alt="Logo sponsor" className="w-16 sm:w-20 h-auto" />
                <Image src={logo4} alt="Logo sponsor" className="w-16 sm:w-20 h-auto" />
                <Image src={logo5} alt="Logo sponsor" className="w-16 sm:w-20 h-auto" />
                <Image src={logo6} alt="Logo sponsor" className="w-16 sm:w-20 h-auto" />
                <Image src={logo7} alt="Logo sponsor" className="w-16 sm:w-20 h-auto" />
            </div>
        </div>
    );
};

export default LogoSection;
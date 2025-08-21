import Image from "next/image";
import React from "react";
import logo1 from "./asserts/logo-1.png"
import logo2 from "./asserts/logo-2.png"
import logo3 from "./asserts/logo-3.png"
import logo4 from "./asserts/logo-4.png"
import logo5 from "./asserts/logo-5.png"
import logo6 from "./asserts/logo-6.png"
import logo7 from "./asserts/logo-7.png"

const LogoSection = () => {
    return(
        <div className="mt-56 flex flex-col justify-center items-center gap-5">
            <p className="text-gray-400">Trusted by teams at over 1,000 of the world’s leading organizations</p>
            <div className="flex gap-8">
                <Image 
                    src={logo1}
                    alt="Logo sponsor"
                />
                <Image 
                    src={logo2}
                    alt="Logo sponsor"
                />
                <Image 
                    src={logo3}
                    alt="Logo sponsor"
                />
                <Image 
                    src={logo4}
                    alt="Logo sponsor"
                />
                <Image 
                    src={logo5}
                    alt="Logo sponsor"
                />
                <Image 
                    src={logo6}
                    alt="Logo sponsor"
                />
                <Image 
                    src={logo7}
                    alt="Logo sponsor"
                />
            </div>
        </div>
    )
}

export default LogoSection;
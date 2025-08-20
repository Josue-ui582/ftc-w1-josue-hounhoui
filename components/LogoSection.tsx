import Image from "next/image";
import React from "react";

const LogoSection = () => {
    return(
        <div className="mt-56 flex flex-col justify-center items-center gap-5">
            <p className="text-gray-400">Trusted by teams at over 1,000 of the world’s leading organizations</p>
            <div className="flex gap-8">
                <Image 
                    src="/logo-1.png"
                    alt="Logo sponsor"
                    width={60}
                    height={10}
                />
                <Image 
                    src="/logo-2.png"
                    alt="Logo sponsor"
                    width={70}
                    height={10}
                />
                <Image 
                    src="/logo-3.png"
                    alt="Logo sponsor"
                    width={80}
                    height={30}
                />
                <Image 
                    src="/logo-4.png"
                    alt="Logo sponsor"
                    width={140}
                    height={30}
                />
                <Image 
                    src="/logo-5.png"
                    alt="Logo sponsor"
                    width={60}
                    height={30}
                />
                <Image 
                    src="/logo-6.png"
                    alt="Logo sponsor"
                    width={80}
                    height={30}
                />
                <Image 
                    src="/logo-7.png"
                    alt="Logo sponsor"
                    width={60}
                    height={30}
                />
            </div>
        </div>
    )
}

export default LogoSection;
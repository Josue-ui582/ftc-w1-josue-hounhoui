import Image from "next/image";
import React from "react";

const TitleSection = () => {
    return(
        <div className="flex flex-col gap-6 relative items-center">
            <p className="w-fit text-gray-400 border-[.5px] border-gray-400 text-[15px] rounded-full px-2 py-1 text-center">
                We just raised $20M in Series B. Learn more
            </p>
            <h1 className="text-5xl text-center font-medium">
                <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">Modern analytics</span> <br />
                <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">for the modern world</span>
            </h1>
            <p className="text-gray-400 text-[15px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="flex gap-2">
                <button className="px-2 py-1 text-black bg-white font-bold rounded-2xl cursor-pointer">Download the app</button>
                <button className="border-white rounded-2xl px-2 py-1 text-white border-1 cursor-pointer">Talk to an expert</button>
            </div>
            <div className="relative">
                <Image 
                    src="/image-wrapper.png"
                    alt="ImageWrapper"
                    width={700}
                    height={500}
                />
            </div>
        </div>
    )
}

export default TitleSection;
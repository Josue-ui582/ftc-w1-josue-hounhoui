import Image from "next/image";
import React from "react";
import imageWrapper from "./asserts/image-wrapper.png"

const TitleSection = () => {
    return (
        <div className="flex flex-col gap-4 md:gap-6 relative items-center text-center">
            <p className="w-fit text-gray-400 border-[.5px] border-gray-400 
                text-xs sm:text-sm md:text-[15px] rounded-full px-2 py-1">
                We just raised $20M in Series B. Learn more
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-medium leading-snug md:leading-[1.2]">
                <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                    Modern analytics
                </span> <br />
                <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                    for the modern world
                </span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-[15px] md:text-[15px] text-center px-2 sm:px-4 md:px-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                <br className="hidden md:block" /> 
                Suspendisse varius enim in eros elementum tristique.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full justify-center">
                <button className="px-3 md:mx-0 mx-4 py-2 text-sm sm:text-base text-black bg-white font-bold rounded-full cursor-pointer">
                    Download the app
                </button>
                <button className="hidden md:flex border-white rounded-full px-3 py-2 text-sm sm:text-base text-white border cursor-pointer">
                    Talk to an expert
                </button>
            </div>

            <div className="relative w-full flex justify-center">
                <Image 
                    src={imageWrapper}
                    alt="ImageWrapper"
                    width={700}
                    height={500}
                    className="w-[90%] sm:w-[600px] md:w-[700px] h-auto"
                />
            </div>
        </div>
    )
}

export default TitleSection;
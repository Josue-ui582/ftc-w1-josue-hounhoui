import React from "react"
import Image from "next/image"
import Link from "next/link"
import viewCode from "./asserts/code-view.png"
import code from "./asserts/code.png"

const CollabSection = () => {
    return (
        <section className="flex justify-center items-center mt-20">
            <div className="md:w-[60%] w-[90%] shadow-blue-300 shadow-sm rounded-lg md:p-8 p-4 flex md:flex-row flex-col gap-7 justify-center items-center">
                
                <div className="flex flex-col gap-4 justify-start items-start md:w-1/2">
                    <Image 
                        src={code}
                        alt="code-icon"
                        width={70}
                        height={70}
                        className=""
                    />

                    <div className="flex flex-col gap-2 md:gap-4">
                        <h2 className="text-gray-100 text-xl">Code collaboration</h2>
                        <p className="text-gray-300 text-[13px]">
                          Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable.
                        </p>
                        <Link href="/" className="text-gray-100 text-[16px] hover:underline">
                          View code collaboration
                        </Link>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <Image 
                        src={viewCode}
                        alt="code-view"
                        width={500}
                        height={400}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default CollabSection
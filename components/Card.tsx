import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

interface Props  {
    logo : StaticImageData | string;
    title : string;
    content : string;
    link : string
}

const Card: React.FC<Props> = ({ logo, title, content, link }) => {
    return (
        <div className="flex flex-col gap-4 items-start justify-start p-6 sm:p-8 rounded-xl shadow-blue-300 shadow-sm w-full">
            <Image 
                src={logo}
                alt={title}
                width={60}
                height={60}
                className="sm:w-[70px] sm:h-[70px]"
            />
            <h2 className="text-gray-100 text-lg sm:text-xl">{title}</h2>
            <p className="text-gray-300 text-sm sm:text-[13px] leading-relaxed">
                {content}
            </p>
            <Link href="/" className="text-gray-200 hover:underline text-sm sm:text-[16px]">
                {link}
            </Link>
        </div>
    )
}

export default Card;
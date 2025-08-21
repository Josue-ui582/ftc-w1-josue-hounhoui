import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props  {
    logo : any;
    title : string;
    content : string;
    link : string
}

const Card: React.FC<Props> = ({ logo, title, content, link }) => {
    return(
        <div className="flex flex-col gap-4 items-start justify-start p-8 rounded-xl shadow-blue-300 shadow-sm">
            <Image 
                src={logo}
                alt={logo}
                width={70}
                height={70}
            />
            <h2 className="text-gray-100 text-xl">{title}</h2>
            <p className="text-gray-300 text-[13px]">{content}</p>
            <Link href="/" className="text-gray-200 hover:underline text-[16px]">{link}</Link>
        </div>
    )
}

export default Card;
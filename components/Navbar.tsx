import React from "react";
import Image from "next/image";

const Navbar = () => {
    return(
        <nav className="mx-20 my-10 flex justify-between">
            <div className="flex gap-2 justify-center items-center">
                <Image 
                src="/logo.png"
                alt="Logo"
                width={20}
                height={20}
                />
                <p className="text-white font-bold">VaultFlow</p>
            </div>
            <div className="flex justify-center items-center gap-5">
                <ul className="flex justify-center items-center gap-5 text-gray-200 text-[16px]">
                    <li className="cursor-pointer hover:underline">Features</li>
                    <li className="cursor-pointer hover:underline">Pricing</li>
                    <li className="cursor-pointer hover:underline">About us</li>
                </ul>
                <button className="px-2 py-1 text-black bg-white font-bold rounded-2xl cursor-pointer">Download the app</button>
                <button className="border-white rounded-2xl px-2 py-1 text-white border-1 cursor-pointer">Talk to an expert</button>
            </div>
        </nav>
    )
}

export default Navbar;
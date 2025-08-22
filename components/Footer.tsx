import React from "react";
import Image from "next/image";

const Footer = () => {
    return(
        <footer className="flex justify-center items-center mt-20">
            <div className="md:w-[60%] w-[90%] md:py-8 py-4">
                <div className="flex md:flex-row flex-col md:justify-between justify-center md:gap-5 gap-3 md:items-end items-center">
                    <div className="flex md:flex-row flex-col md:gap-5 gap-3 justify-center md:items-start items-start">
                        <div className="flex flex-col items-start justify-start gap-4">
                            <h4 className="text-gray-200 text-xl">Contact</h4>
                            <div className="text-gray-400 text-[15px]">
                                <p>Work inquires: work@vaultflow.com</p>
                                <p>PR and speaking: press@vaultflow.com</p>
                                <p>New business: newbusiness@vaultflow.com</p>
                            </div>
                            <div>
                                <h4 className="text-gray-200 text-xl">Carrer</h4>
                                <p className="text-gray-400 text-[15px]">Careers@vaultflow.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-4">
                            <h4 className="text-gray-200 text-xl">Address</h4>
                            <div className="text-gray-400 text-[15px]">
                                <p>398 11th Street, Floor 2</p>
                                <p>San Francisco, CA 94103</p>
                            </div>
                            <div>
                                <h4 className="text-gray-200 text-xl">Social</h4>
                                <ul className="text-gray-400 text-15px">
                                    <li>Twitter</li>
                                    <li>Instagram</li>
                                    <li>Tik Tok</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Image 
                            src="/logo.png"
                            alt="Logo"
                            width={20}
                            height={20}
                        />
                        <p className="text-white font-bold">VaultFlow</p>
                    </div>
                </div>
                <p className="text-gray-500 text-[15px] text-center mt-10">© 2023 Vaultflow. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;
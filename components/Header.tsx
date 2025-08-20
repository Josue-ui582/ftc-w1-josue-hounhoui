import React from "react";
import Image from "next/image";
import TitleSection from "./TitleSection";

const Header = () => {
  return (
    <header className="relative w-full h-screen">
      <Image 
        src="/header-background.jpg"
        alt="Background"
        fill
        priority
        className="object-contain w-[90%] h-[70vh]"
      />
      <div className="relative z-10 flex items-center justify-center h-full text-white top-32">
        <TitleSection />
      </div>
    </header>
  );
}

export default Header;
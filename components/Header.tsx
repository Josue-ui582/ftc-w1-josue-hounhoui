import React from "react";
import Image from "next/image";
import TitleSection from "./TitleSection";
import headerImage from "./asserts/header-background.jpg"

const Header = () => {
  return (
    <header className="relative w-full md:h-screen">
      <Image 
        src={headerImage}
        alt="Background"
        fill
        priority
        className="object-cover object-top"
      />
      <div className="relative z-10 flex md:items-center md:justify-center justify-start items-start h-full text-white md:top-52 top-14">
        <TitleSection />
      </div>
    </header>
  );
}

export default Header;
"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import openIcon from "./asserts/open.png";
import closeIcon from "./asserts/close.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [openMenu]);

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="mx-6 md:mx-20 py-4 md:py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="VaultFlow logo"
            width={30}
            height={30}
            priority
          />
          <p className="text-white font-bold text-lg">VaultFlow</p>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <ul className="flex items-center gap-5 text-gray-200 text-[16px]">
            <li className="cursor-pointer hover:underline">Features</li>
            <li className="cursor-pointer hover:underline">Pricing</li>
            <li className="cursor-pointer hover:underline">About us</li>
          </ul>
          <button className="px-3 py-1 text-black bg-white font-bold rounded-2xl cursor-pointer">
            Download the app
          </button>
          <button className="border border-white rounded-2xl px-3 py-1 text-white cursor-pointer">
            Talk to an expert
          </button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
          aria-expanded={openMenu}
          aria-controls="mobile-menu"
          onClick={() => setOpenMenu(true)}
        >
          <Image src={openIcon} alt="Open menu" width={28} height={28} />
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 flex flex-col gap-4 p-4 z-[60] backdrop-blur-sm transition-opacity duration-200
          ${openMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!openMenu}
      >
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Image
                    src="/logo.png"
                    alt="VaultFlow logo"
                    width={30}
                    height={30}
                    priority
                />
                <p className="text-white font-bold text-lg">VaultFlow</p>
            </div>
            <button
                type="button"
                onClick={() => setOpenMenu(false)}
                className="absolute right-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 cursor-pointer"
                >
                <Image src={closeIcon} alt="Close menu" width={28} height={28} />
                <span className="sr-only">Close menu</span>
            </button>
        </div>

        <div className="h-[100dvh] w-full flex flex-col items-start justify-between gap-8 text-white text-xl">
          <ul className="flex flex-col items-center gap-6 text-[17px]">
            <li className="cursor-pointer hover:underline" onClick={() => setOpenMenu(false)}>Features</li>
            <li className="cursor-pointer hover:underline" onClick={() => setOpenMenu(false)}>Pricing</li>
            <li className="cursor-pointer hover:underline" onClick={() => setOpenMenu(false)}>About us</li>
          </ul>
          <button
            className="border border-white rounded-2xl w-full px-4 py-2 text-white cursor-pointer"
            onClick={() => setOpenMenu(false)}
          >
            Talk to an expert
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
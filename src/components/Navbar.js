import { ArrowRightIcon, PhoneIcon, MailIcon } from "@heroicons/react/solid";
import React from "react";
import logo from "./../kurtaranlogo3.svg";

export default function Navbar() {
  return (
    <header className="bg-black md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            <img
              src={logo}
              className="object-scale-down h-12 -mt-6 hover:fill-current text-green-600"
              alt="logo"
            />
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Hakkımızda
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Hizmetler
          </a>
          <a href="#videos" className="mr-5 hover:text-white">
            Videolar
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Makaleler
          </a>
        </nav>
        <div href="#skills" className=" inline-flex items-center mr-5">
          <PhoneIcon className="w-4 h-4 ml-1" /> 0222 226 00 87
          <MailIcon className="w-4 h-4 ml-1" />
          av.kurtaran@gmail.com
        </div>
        <a
          href="#contact"
          className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gold hover:text-white rounded text-base mt-4 md:mt-0 text-gold"
        >
          Bize Ulaşın
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

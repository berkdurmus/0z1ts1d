import { ArrowRightIcon, PhoneIcon, MailIcon } from "@heroicons/react/solid";
import React from "react";
import logo from "./../kurtaranlogo6.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar({ path = "" }) {
  return (
    <header className="bg-black md:sticky top-0  z-10">
      <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center bg-black mt-100">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href={`${path}#homepage`} className="ml-3 text-xl">
            <img
              src={logo}
              className="object-scale-down h-12 -mt-6 hover:fill-current text-green-600"
              alt="logo"
              style={{ marginBottom: "10px" }}
            />
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center ">
          <a
            href={`${path}#about`}
            className="mr-5 hover:text-gold"
            style={{ marginBottom: "10px" }}
          >
            Hakkımızda
          </a>
          <a
            href={`${path}#services`}
            className="mr-5 hover:text-gold"
            style={{ marginBottom: "10px" }}
          >
            Hizmetlerimiz
          </a>

          <a
            href={`${path}#articles`}
            className="mr-5 hover:text-gold"
            style={{ marginBottom: "10px" }}
          >
            Makaleler
          </a>
          <a
            href={`${path}#videos`}
            className="mr-5 hover:text-gold"
            style={{ marginBottom: "10px" }}
          >
            Soru-Cevap (Video)
          </a>
        </nav>
        <div
          href="#skills"
          className=" inline-flex items-center mr-5 "
          style={{ marginBottom: "10px" }}
        >
          <PhoneIcon className="w-4 h-4 ml-1" />
          <a
            href="tel:+902222051095"
            className="hover:text-gold"
            style={{ marginRight: "30px" }}
          >
            {" "}
            0(222) 205 10 95{" "}
          </a>
          {"     "}
          <MailIcon
            href="mailto:av.kurtaran@gmail.com"
            className="w-4 h-4 ml-1"
          />
          <a href="mailto:av.kurtaran@gmail.com" className="hover:text-gold">
            {" "}
            av.kurtaran@gmail.com
          </a>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gold hover:text-white rounded text-base mt-4 md:mt-0 text-gold"
          style={{ marginBottom: "10px" }}
        >
          Bize Ulaşın
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

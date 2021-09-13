import {
  CodeIcon,
  BadgeCheckIcon,
  AnnotationIcon,
} from "@heroicons/react/solid";
import React from "react";
import { projects, skills } from "../data";
import img from "../image4.jpeg";

export default function Projects() {
  return (
    <section id="about" className="text-gray-400 bg-black body-font">
      <div
        className="container px-5 py-10 mx-auto text-center lg:px-40 "
        style={{ marginBottom: "-10vw" }}
      >
        <div className="flex flex-col w-full mb-20">
          <AnnotationIcon
            className="mx-auto inline-block w-10 mb-4"
            style={{ marginTop: "160px" }}
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Hakkımızda
          </h1>
        </div>
      </div>

      <div className="container mx-auto flex md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left mb-32 md:mb-0 items-center text-center ">
          <div
            className="title-font  mb-4 font-regular text-white"
            style={{
              fontSize: "max(2vw, 20px)",
              marginTop: "180px",
              textAlign: "justify",
              textJustify: "inter-word",
              padding: "10px",
              fontFamily: "Crimson Pro, serif",
              fontStyle: "italic",
            }}
          >
            Kurtaran Hukuk & Danışmanlık, akademik ve mesleki birikime sahip
            olmanın yanı sıra genç ve dinamik yapısı, yenilikçi bakış açısı,
            verimli zaman kullanımı ve çözüm odaklı yaklaşımı ile müvekkilleri
            için etkin ve hızlı sonuç almayı prensip edinmiş, Eskişehir’de
            hizmet veren bir hukuk bürosudur.
          </div>
          <div
            className="title-font  mb-4  text-white"
            style={{
              fontSize: "max(2vw, 20px)",
              marginTop: "20px",
              textAlign: "justify",
              textJustify: "inter-word",
              padding: "10px",
              fontFamily: "Crimson Pro, serif",
              fontStyle: "italic",
            }}
          >
            Avukat Erinç Kurtaran hukuk eğitimini, yasal avukatlık stajını ve
            mesleğindeki ilk yıllarını Ankara’da sürdürmüş olup şu an
            Eskişehir’de hizmet veren Kurtaran Hukuk & Danışmanlık bürosunun
            kurucu avukatı olarak mesleki yaşantısına devam etmektedir.
          </div>
          <h1></h1>
          <h2></h2>
          <br className=" lg:inline-block" />
          <br className=" lg:inline-block" />
          <br className=" lg:inline-block" />
          <h1
            className="title-font  mb-4 font-medium text-white"
            style={{ fontSize: "max(2vw, 18px)" }}
          ></h1>
        </div>
        {/*<div
          className="bg-fixed"
          style={{
            backgroundImage: `url(${fadeImages[0]})`,
            width: "60vw",
            height: "40vw",
            backgroundSize: "cover",
          }}
        ></div>
        */}

        <img
          src={img}
          style={{
            maxWidth: "350px",
            marginRight: "5px",
            marginLeft: "5px",
            width: "100%",
          }}
        />
      </div>

      <div className="container px-5 py-10 mx-auto text-center lg:px-40 ">
        <div className="flex flex-col w-full mb-20"></div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-gold w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

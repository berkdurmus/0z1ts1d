import { BadgeCheckIcon, ChipIcon, BookOpenIcon } from "@heroicons/react/solid";
import React, { Text } from "react";
import { skills, projects } from "../data";
import img from "../combined2.png";

export default function Articles() {
  return (
    <section id="articles" style={{ marginTop: "100px" }}>
      <div className="">
        <div className="text-center mb-20">
          <BookOpenIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Makaleler
          </h1>
          <img
            src={img}
            alt="Nature"
            class="responsive"
            style={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
              marginTop: "60px",
            }}
          />
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"></p>
        </div>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4"
              >
                <h1 className="title-font text-lg font-medium text-white bg-black mb-3"></h1>
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                  />

                  <div className="px-8 py-10 relative  w-full border-4 border-gray-800 bg-black bg-opacity-100 opacity-100 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-gold mb-1">
                      Makale
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gold mb-3">
                      X Davalarında Y Bakış Açısı
                    </h1>
                    <p
                      className="leading-relaxed text-white"
                      style={{
                        wordBreak: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-inline-flex",
                        WebkitLineClamp: "2",
                        lineClamp: "2",
                      }}
                    >
                      {project.description.length > 50
                        ? project.description.substring(0, 50)
                        : project.description}
                      ...
                    </p>
                    <text> </text>
                    <text> devamını oku > </text>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

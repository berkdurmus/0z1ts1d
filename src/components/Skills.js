import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills, projects } from "../data";
import img from "../combined5.png";

export default function Skills() {
  return (
    <section id="services" style={{ marginTop: "50px" }}>
      <div className="">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Hizmetlerimiz
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
              <a key={project.image} className="sm:w-1/2 w-100 p-4">
                <h1 className="title-font text-lg font-medium text-gold bg-black mb-3">
                  {project.title}
                </h1>
                <div className="flex relative" style={{ minHeight: "250px" }}>
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                  />

                  <div className="px-8 py-10 relative  w-full border-4 border-gray-800 hover:border-gold bg-black bg-opacity-50 opacity-100 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-gold mb-1"></h2>
                    <h1 className="title-font text-lg font-medium text-gold mb-3"></h1>
                    <p className="leading-relaxed text-white">
                      {project.description}
                    </p>
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

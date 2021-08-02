import { CodeIcon, VideoCameraIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Videos() {
  return (
    <section id="projects" className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-10 mx-auto text-center justify-center">
        <div className="flex flex-col w-full mb-20">
          <VideoCameraIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Videolar
          </h1>
        </div>
        <div className="flex flex-wrap content-evenly">
          <iframe
            width="100%"
            height="300px"
            src="https://www.youtube.com/embed/Hkr-k6zOeJo"
            title="YouTube video player"
            allow="fullscren; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

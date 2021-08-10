import { CodeIcon, VideoCameraIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import img from "../yatay01.jpg";
export default function Videos() {
  return (
    <section id="videos" className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-10 mx-auto text-center justify-center">
        <div className="flex flex-col w-full mb-20">
          <VideoCameraIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Soru-Cevap (Video)
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
        </div>
        <div className="flex flex-wrap content-evenly">
          <iframe
            width="100%"
            height="300px"
            src="https://www.youtube.com/embed/Hkr-k6zOeJoasdfasdfasdf"
            title="YouTube video player"
            allow="fullscren; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="100%"
            height="300px"
            src="https://www.youtube.com/embed/Hkr-k6zOeJoasdfasdfasdf"
            title="YouTube video player"
            allow="fullscren; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

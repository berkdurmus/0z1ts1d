import {
  CodeIcon,
  BadgeCheckIcon,
  AnnotationIcon,
} from "@heroicons/react/solid";
import React from "react";
import { projects, skills } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <AnnotationIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Hakkımızda
          </h1>
          <p className="lg:w mx-auto leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            sapien posuere, suscipit velit ut, scelerisque lorem. Maecenas
            finibus malesuada molestie. Maecenas feugiat vulputate posuere. Nam
            fermentum nunc eget massa imperdiet lacinia et sed risus. Phasellus
            quis sapien dapibus, pretium libero non, porta erat. Donec vehicula
            leo eu arcu fringilla lobortis eu sit amet orci. Aliquam id
            imperdiet libero. Nullam ultricies enim quam, eget tincidunt nisi
            luctus vel. Sed euismod ac justo eget convallis. Maecenas facilisis
            sagittis posuere. Nullam pulvinar pharetra velit, quis auctor diam
            egestas ut. Maecenas metus mi, finibus vel malesuada nec, fermentum
            a lacus. Proin sit amet viverra tellus. In sem elit, pulvinar eget
            diam nec, aliquam placerat arcu. Fusce semper mollis est maximus
            varius. Vestibulum ornare lorem lacus, sit amet fermentum magna
            rhoncus sed. Cras imperdiet dignissim est quis ultricies. Curabitur
            accumsan, augue et fermentum dictum, urna est efficitur urna, id
            volutpat purus nisi sed elit. Donec quis tellus hendrerit, varius
            mauris at, hendrerit tortor. Quisque ut cursus odio, quis aliquet
            velit. Maecenas lacus elit, vulputate non ante vel, auctor feugiat
            purus. Integer imperdiet felis sit amet pharetra ultricies. Mauris
            scelerisque laoreet lacinia. Etiam eros dui, malesuada sed ipsum
            nec, dapibus tincidunt justo. Maecenas blandit lacus.
          </p>
        </div>
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

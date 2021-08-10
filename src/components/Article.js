import { BookOpenIcon } from "@heroicons/react/solid";
import React, { Text, useEffect } from "react";
import { useParams } from "react-router";
//import img from "../combined2.png";
import img from "../combined5.png";

import { articles } from "../data";
export default function Article() {
  let { title } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //REPLACE: urlEncode(a.title) === url;
  const article = articles.find((a) => a.title == title);
  return (
    <section id="article" className="bg-black">
      <div
        className="container mx-auto flex md:flex-row flex-col items-center bg-black"
        style={{ marginTop: "130px" }}
      >
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gold">
            {article.title}
            <div>
              {article.content.map((paragraph) => (
                <div
                  className="title-font  mb-10 font-regular text-white"
                  style={{
                    fontSize: "max(1.5vw, 16px)",
                    marginTop: "20px",
                    textAlign: "justify",
                    textJustify: "inter-word",
                    padding: "0px",
                  }}
                >
                  {" "}
                  {paragraph}
                </div>
              ))}
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
}

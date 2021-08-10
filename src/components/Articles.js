import { BadgeCheckIcon, ChipIcon, BookOpenIcon } from "@heroicons/react/solid";
import React, { Text } from "react";
import { skills, projects, articles } from "../data";
import img from "../kutuphane.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          {/*<img
            src={img}
            alt="Nature"
            class="responsive"
            style={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
              marginTop: "60px",
            }}
        />*/}
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"></p>
        </div>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {articles.map((article) => (
              <a key={article.title} className="sm:w-1/2 w-100 p-4">
                <Link to={`/makale/` + encodeURI(article.title)}>
                  <h1 className="title-font text-lg font-medium text-white bg-black mb-3"></h1>
                  <div className="flex relative">
                    <div className="px-8 py-10 relative  w-full border-4 border-gray-800 hover:border-gold bg-black bg-opacity-100 opacity-100 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-gold mb-1">
                        Makale
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gold mb-3">
                        {article.title}
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
                        {article.content[0].length > 80
                          ? article.content[0].substring(0, 80)
                          : article.content[0]}
                        ...
                      </p>
                      <text> </text>
                      <text className="hover:text-gold"> devamını oku > </text>
                    </div>
                  </div>
                </Link>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect, useCallback } from "react";
import img from "../header.svg";
import SimpleImageSlider from "react-simple-image-slider";

const texts = [
  {
    text: `"Şeref ve doğruluk adaletin temelidir."`,
    person: "Marcus Tullius Cicero",
  },
  {
    text: `"Bir tek kişiye yapılan bir haksızlık, bütün topluma yapılan bir tehdittir."`,
    person: " Montesquieu",
  },
  {
    text: `"Adalet herkese kendi hakkını vermek konusunda kat'i ve davamlı bir iradedir."`,
    person: "Lustinianus",
  },
];

const images = [
  {
    url:
      "https://ik.imagekit.io/rfjpogvdn8p/erinc0_TsP6134H5.jpg?updatedAt=1627913960589",
  },
  {
    url:
      "https://ik.imagekit.io/rfjpogvdn8p/header_4uZLJ6BG2uL.svg?updatedAt=1627904638262",
  },
  {
    url:
      "https://ik.imagekit.io/rfjpogvdn8p/lady-justice_V9Yf9jFiy6A.jpg?updatedAt=1627907609733",
  },
];

export default function About() {
  //const [currentImage, setCurrentImage] = useState();
  const [activeText, setActiveText] = useState(texts[0]);

  const onStartSlide = useCallback((idx, length) => {
    console.log(`[App onStartSlide] ${idx}/${length}`);
    //setSlideIndexText(`${idx} / ${length}`);
    let textId = idx - 1;
    setActiveText(texts[textId]);
  }, []);

  const changeImagePeriodically = () => {};

  return (
    <section id="about">
      <div className="container mx-auto flex md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {activeText.text}
            <h1 className="title-font sm:text-xl text-3xl mb-4 font-medium text-white">
              {activeText.person}
            </h1>
            <br className="hidden lg:inline-block" />
          </h1>
          <h2 className=" whitespace-pre-wrap title-font sm:text-2xl text-2xl mb-4 font-medium text-white ">
            Etkin, Güvenilir, Saygın.
            <br className="hidden lg:inline-block" />
          </h2>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-gold border-0 py-2 px-6 focus:outline-none hover:bg-gold-highlight rounded text-lg"
            >
              Bize Ulaşın
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400  border-0 py-2 px-6 focus:outline-none hover:bg-gold-highlight hover:text-white rounded text-lg"
            >
              Hizmetlerimize gözatın
            </a>
          </div>
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
        <div>
          <SimpleImageSlider
            className="bg-fixed"
            height="40vw"
            width="60vw"
            images={images}
            slideDuration={1.2}
            startIndex={0}
            useGPURender={true}
            showBullets={false}
            showNavs={true}
            navStyle={2}
            navSize={50}
            onStartSlide={onStartSlide}
          />
        </div>
      </div>
    </section>
  );
}

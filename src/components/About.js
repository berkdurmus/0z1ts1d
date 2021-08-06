import React, { useState, useEffect, useCallback } from "react";
import img from "../header.svg";
import SimpleImageSlider from "react-simple-image-slider";

const texts = [
  {
    text: `"Adalet kutup yıldızı gibi yerinde durur ve geri kalan her şey onun etrafında döner."`,
    person: "Konfüçyüs",
  },
  {
    text: `"Bir tek kişiye yapılan bir haksızlık, bütün topluma yapılan bir tehdittir."`,
    person: " Montesquieu",
  },
  {
    text: `"İnsancıl   olmadıkça   adil   olunamaz."`,
    person: "Vauvenargues",
  },
  {
    text: `"Bir   yargıç,  iyi   niyetle   dinlemeli,   akıllıca   karşılık  vermeli,   sağlıklı   düşünmeli   ve tarafsızca karar vermelidir."`,
    person: "Sokrates",
  },
  {
    text: `"Şeref   ve   doğruluk   adaletin   temelidir."`,
    person: "Cicero",
  },
  {
    text: `"Adaletin   kuvvetli,   kuvvetlinin   de   adil   olması   gerekir."`,
    person: "Pascal",
  },
  {
    text: `"Adaletsizliğin   en   büyüğü   adil   olmayıp   adil   gibi   görünmektir."`,
    person: "Platon",
  },
  {
    text: `"Adaletin   olmadığı   yerde   ahlaktan   bahsedilemez."`,
    person: " Montaigne",
  },
  {
    text: `"Adaletsizliği   bir   yangından   daha   çabuk   önlemeliyiz."`,
    person: "Heraklitos",
  },
  {
    text: `"Bir sırrı saklayarak adalete zarar vermektense, adalet uğruna zarar görmeyi tercih ederim."`,
    person: "Beethoven",
  },
  {
    text: `"Hukukun   buyrukları   şunlardır:   Dürüst   yaşamak,   başkasını   zarara   uğratmamak, herkesin hakkını vermek."`,
    person: "Ulpianus",
  },
  {
    text: `"Haksızlığa  sapıp  bütün  insanların   seni izlemeleri  yerine,  adaletli  davranıp   tek başına kalmak daha iyidir."`,
    person: "Gandhi",
  },
];

const images = [
  {
    url:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1505547828843-176834e42154?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1437751068958-82e6fccc9360?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1531816458010-fb7685eecbcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1526285759904-71d1170ed2ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1505488387362-48bc38155987?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1559749659-de900b633c9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
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
    <section id="homepage">
      <div className="container mx-auto flex md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {activeText.text}
            <h1
              className="title-font sm:text-xl text-3xl mb-4 font-medium text-gold"
              style={{ marginTop: "30px" }}
            >
              {activeText.person}
            </h1>
            <br className="hidden lg:inline-block" />
          </h1>
          {/*
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
          */}
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

import React from "react";
import img from "../header.svg";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import * as emailjs from "emailjs-com";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bpdbigo",
        "template_t81f2nr",
        e.target,
        "user_i7n0TPSdMmKfsb0DaOgpi"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mesajınız gönderildi!:", result.text);
        },
        (error) => {
          console.log(error.text);
          alert("Lütfen gerekli alanları eksiksiz doldurun.");
        }
      );
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="">
        <div className="text-center mb-20">
          <LocationMarkerIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Bize Ulaşın
          </h1>
          <h1 className="sm:text-xl text-xl font-regular title-font text-gold mb-4">
            Alanönü Mah. Petek Sok. Köker Plaza No:1 Kat:1 Daire:3, 26030
            Odunpazarı/Eskişehir
          </h1>
        </div>

        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap ">
          <div
            className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
            style={{
              minWidth: "min(100vw, 300px)",
              minHeight: "min(100vw, 300px)",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.9)" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1555036.7432756652!2d28.64828295464885!3d40.426987753310975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc3d9e050b211b%3A0xfbbdd972f1d84275!2zS3VydGFyYW4gSHVrdWsgJiBEYW7EscWfbWFubMSxaw!5e0!3m2!1sen!2str!4v1628600942476!5m2!1sen!2str&z=15"
            />
          </div>
          <form
            netlify
            name="contact"
            onSubmit={sendEmail}
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              İletişim
            </h2>
            <p className="leading-relaxed mb-5">
              Destek olmamızı istediğiniz herhangi bir hukuki konu ya da sorunuz
              varsa bize ulaşabilirsiniz.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Ad Soyad
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-gold border-0 py-2 px-6 focus:outline-none hover:bg-gold-highlight rounded text-lg"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

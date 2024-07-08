"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'

const Hero = ({ }) => {
  var settings = {
    mobileFirst: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

        },
      },
    ],

  };

  return (
    <div className="text-center mt-4 mx-2">
      <h1 className="hidden text-gold underline text-xl  lg:block uppercase lg:text-4xl lg:my-24">Maison l&apos;Acacia</h1>
      <div className="lg:flex lg:items-center  lg:mx-24 lg:bg-[url('/quote.png')] bg-no-repeat bg-left-top">
        <div className="lg:flex lg:flex-col lg:items-center">
          <h1 className="text-gold underline text-xl uppercase lg:hidden">Maison l&apos;Acacia</h1>
          <p className="text-base lg:text-xl lg:text-left lg:w-4/6 lg:mt-4">
            L&apos;Acacia en Provence est un lieu unique qui se distingue par sa terrasse ensoleillée et son ambiance conviviale.
            La cheffe Joanna, passionnée par l&apos;art culinaire, propose une cuisine raffinée et créative, mettant à l&apos;honneur les produits locaux de la région.
          </p>
          <p className="hidden text-base lg:text-xl lg:text-left lg:w-4/6 lg:mt-4 lg:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deserunt minima commodi eveniet error, eius voluptatum eaque, ducimus quis quidem dolores aliquid. Eius adipisci esse odit fugit. Vel, possimus minima?anna, passionnée par l&apos;art culinaire, propose une cuisine raffinée et créative, mettant à l&apos;honneur les produits locaux de la région.
          </p>
        </div>
        <Image src="/exte.JPEG" alt="Plate of Food" layout="responsive" width={250} height={250} className="rounded-lg hidden lg:block max-w-md" />
      </div>
      <div className="lg:flex flex-row lg:mx-24 hidden items-center mt-48 lg:bg-[url('/quote.png')] bg-no-repeat bg-right-top">
        <Image src="/rocque.JPEG" alt="Plate of Food" layout="responsive" width={250} height={250} className="rounded-lg lg:flex max-w-md" />
        <p className="text-base lg:text-xl lg:w-4/6 lg:ml-4 lg:text-right">
          L&apos;Acacia en Provence est un lieu unique qui se distingue par sa terrasse ensoleillée et son ambiance conviviale.
          La cheffe Joanna, passionnée par l&apos;art culinaire, propose une cuisine raffinée et créative, mettant à l&apos;honneur les produits locaux de la région.
        </p>
      </div>

      <Slider className="mt-4 lg:mt-52 " {...settings}>
        <div className="px-1 lg:px-3">
          <Image src="/plate1.JPEG" alt="Plate of Food" layout="responsive" width={250} height={250} className="rounded-lg" />
        </div>
        <div className="px-1 lg:px-3">
          <Image src="/plate2.JPEG" alt="Plate of Food" layout="responsive" width={250} height={250} className="rounded-lg" />
        </div>
        <div className="px-1 lg:px-3">
          <Image src="/plate3.JPEG" alt="Plate of Food" layout="responsive" width={250} height={250} className="rounded-lg" />
        </div>
        <div className="px-1 lg:px-3">
          <Image src="/plate4.JPEG" alt="Plate of Food" layout="responsive" width={250} height={250} className="rounded-lg" />
        </div>
        <div className="px-1 lg:px-3">
          <Image src="/plate5.JPEG" alt="Plate of Food" layout="responsive" width={250} height={250} className="rounded-lg" />
        </div>
        <div className="px-1 lg:px-3">
          <Image src="/plate6.JPEG" alt="Plate of Food" layout="responsive" width={250} height={250} className="rounded-lg" />
        </div>
        <div className="px-1 lg:px-3">
          <Image src="/plate7.JPEG" alt="Plate of Food" layout="responsive" width={250} height={250} className="rounded-lg" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;

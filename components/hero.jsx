"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'

const Hero = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    draggable: false,
  };

  return (
    <div className="text-center mt-4 mx-2 lg:mt-12">
      <div className="lg:flex lg:items-center lg:border-2 lg:border-primary lg:rounded-lg lg:mx-24">
        <div className="lg:flex lg:flex-col lg:items-center">
          <h1 className="text-gold underline text-xl uppercase lg:text-2xl">Maison l'Acacia</h1>
          <p className="text-base lg:text-xl lg:text-left lg:w-4/6 lg:mt-4">
            L’Acacia en Provence est un lieu unique qui se distingue par sa terrasse ensoleillée et son ambiance conviviale.
            La cheffe Joanna, passionnée par l’art culinaire, propose une cuisine raffinée et créative, mettant à l’honneur les produits locaux de la région.
          </p>
          <p className="hidden text-base lg:text-xl lg:text-left lg:w-4/6 lg:mt-4 lg:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deserunt minima commodi eveniet error, eius voluptatum eaque, ducimus quis quidem dolores aliquid. Eius adipisci esse odit fugit. Vel, possimus minima?anna, passionnée par l’art culinaire, propose une cuisine raffinée et créative, mettant à l’honneur les produits locaux de la région.
          </p>
        </div>
        <Image src="/exte.JPEG" alt="Plate of Food" layout="responsive" width={250} height={250} className="rounded-lg hidden lg:block max-w-md" />
      </div>
      <Slider className="mt-4 lg:mt-12" {...settings}>
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

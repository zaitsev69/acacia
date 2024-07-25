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
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: 'linear',
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
    <div id="about" className="text-center mt-4 mx-2">
      <div className="flex flex-col items-center">
        <h1 className="hidden text-gold underline text-xl  lg:block uppercase lg:text-4xl lg:mt-24 lg:mb-6">Maison l&apos;Acacia</h1>
        <p className="text-black text-xl text-center lg:w-1/3 hidden lg:mb-12  italic font-medium lg:block">
          Dans un lieu unique, niché dans un petit village des Dentelles de Montmirail, la cheffe Joanna vous invite à découvrir sa passion pour l&apos;art culinaire, une cuisine avec des influences asiatiques et méditerranéennes.
        </p>
      </div>
      <div className="lg:flex lg:items-center  lg:mx-24 lg:bg-[url('/quote.png')] bg-no-repeat bg-left-top">
        <div className="lg:flex lg:flex-col lg:items-center">
          <h1 className="text-gold underline text-xl uppercase lg:hidden">Maison l&apos;Acacia</h1>
          <p className=" text-base text-black lg:text-xl lg:text-left lg:w-4/6 lg:mt-4 p-4 lg:hidden">
            Dans un lieu unique, niché dans un petit village des Dentelles de Montmirail, la cheffe Joanna vous invite à découvrir sa passion pour l&apos;art culinaire, une cuisine avec des influences asiatiques et méditerranéennes.
          </p>
          <div className="h-0.5 mx-10  bg-gold"></div>
          <p className=" text-base text-black lg:text-xl lg:text-left lg:w-4/6 lg:mt-4 lg:block p-4">
            L&apos;Acacia en Provence vous propose un menu dégustation en 4 plats avec accords mets et vin.
            Du mercredi au samedi, il est également possible de venir au Petit Acacia pour boissons, vin, et des grignotages simples, nous proposont également un petit menu à 25 euros.
            Notre menu étant essentiellement végétale, des menus végétarien ou végan peuvent être possible. Nous pouvons également répondre à la plupart des régimes alimentaires et des allergies, mais seulement si vous nous en informez à l&apos;avance.
          </p>
        </div>
        <Image src="/exte.JPEG" alt="Plate of Food" layout="responsive" width={250} height={250} className="rounded-lg hidden lg:block max-w-md" />
      </div>
      <div className="lg:flex flex-row lg:mx-24  items-center lg:mt-48 lg:bg-[url('/quote.png')] bg-no-repeat bg-right-top">
        <Image src="/rocque.JPEG" alt="Plate of Food" layout="responsive" width={250} height={250} className="rounded-lg lg:flex max-w-md hidden" />
        <div className="h-0.5 mx-10   bg-gold"></div>
        <p className=" text-base text-black lg:text-xl lg:w-4/6 lg:ml-4 lg:text-right p-4">
          Pour des groupes de plus de 10 personnes nous aimons organiser des dîners privés, avec le restaurant rien que pour vous n&apos;importe quel jour.
          Comme beaucoup d&apos;entre vous le savent, nous utilisons des produits locaux (biologiques) et des vins locaux.
          Nous avons hâte de vous voir ❤️ <br></br>
          Paiement par carte et espèces - chèques acceptés.
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

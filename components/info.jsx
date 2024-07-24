'use client'

import { useEffect, useState } from "react";

// C:\Users\natha\code\acacia\components\info.jsx
const Info = ({ }) => {

  const [urlToMenu, setUrlToMenu] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/menu/upload', {
          method: 'GET',
        });
        const responseBody = await response.json();

        const lastestBlob = responseBody.blobs.reduce((latest, current) => {
          return new Date(current.uploadedAt) > new Date(latest.uploadedAt) ? current : latest;
      }, responseBody.blobs[0]);
        setUrlToMenu(lastestBlob.url);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="hours" className="bg-primary my-12 lg:bg-grey text-white flex flex-col items-center justify-center lg:px-8 lg:py-12 lg:my-48">
      <h2 className="uppercase text-xl lg:text-gold lg:text-3xl underline text-center mb-4 lg:mb-20 pt-4 px-4">
        Nos horaires et jours d&apos;ouverture
      </h2>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:w-full lg:text-gray-900 ">
        <div className="flex flex-col items-center lg:w-1/2 lg:items-center lg:border-r lg:border-primary lg:pr-8">
          <p className="underline text-center mb-3 text-base lg:text-gold md:text-lg lg:text-2xl">L &apos;Acacia en Provence</p>
          <p className="text-center mb-1 text-base md:text-lg lg:text-2xl ">Cuisine semi-gastronomique</p>
          <p className="text-center mb-1 text-base md:text-lg lg:text-2xl ">Ouvert le jeudi soir, vendredi soir, samedi soir et dimanche midi</p>
          
        </div>
        <div className="flex flex-col items-center lg:w-1/2 lg:pl-8 lg:items-center">
          <p className="underline text-center mb-3 text-base md:text-lg lg:text-gold lg:text-xl xl:text-2xl">Le Petit Acacia</p>
          <p className="text-center mb-1 text-base md:text-lg lg:text-xl xl:text-2xl">Grignotage, boissons et vins.</p>
          <p className="text-center  text-base md:text-lg lg:text-xl xl:text-2xl">Ouvert la journée du mercredi au samedi</p>
          
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-8 lg:size-14 lg:mt-8 animate-bounce mt-4 lg:stroke-primary">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

      <a href={urlToMenu} target="_blank" rel="noopener noreferrer" className="text-center">
            <button className="bg-grey mb-8 font-semibold lg:font-medium lg:bg-primary lg:text-white text-primary py-2 px-4 rounded  lg:mb-8 text-base md:text-lg lg:text-xl xl:text-2xl transition duration-300 ease-in-out transform hover:bg-blue-600 hover:shadow-lg active:scale-95">Voir les cartes de nos restaurants</button>
          </a>
      <p className="text-center mb-1 text-base md:text-lg lg:text-xl xl:text-2xl lg:text-gray-900 lg:mt-0 ">Grande occasion ? Réserver un diner privé par téléphone.</p>
    </div>
    

  );
};

export default Info;

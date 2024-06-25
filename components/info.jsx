// components/Info.js

const Info = () => {
    return (
      <div className="bg-primary text-white flex flex-col items-center justify-center mt-4">
        <h2 className="uppercase text-xl underline text-center mb-4">
          nos horaires et jour d'ouvertures
        </h2>
        <p className="underline text-center mb-3 text-base md:text-lg lg:text-xl xl:text-2xl">L'Acacia en Provence</p>
        <p className="text-center mb-1 text-base md:text-lg lg:text-xl xl:text-2xl">Cuisine semi-gastronomique</p>
        <p className="text-center mb-1 text-base md:text-lg lg:text-xl xl:text-2xl">Ouvert le vendredi soir, samedi soir et dimanche midi</p>
        <button className="bg-grey text-primary py-2 px-4 rounded mb-8 text-base md:text-lg lg:text-xl xl:text-2xl">Voir la carte</button>
        <p className="underline text-center mb-3 text-base md:text-lg lg:text-xl xl:text-2xl">Le Petit Acacia</p>
        <p className="text-center mb-1 text-base md:text-lg lg:text-xl xl:text-2xl">Grignotage, boissons et vins.</p>
        <p className="text-center mb-1 text-base md:text-lg lg:text-xl xl:text-2xl">Ouvert la journée du mercredi au samedi</p>
        <button className="bg-grey text-primary py-2 px-4 rounded text-base md:text-lg lg:text-xl xl:text-2xl mb-8">Voir la carte</button>
        <p className="text-center mb-1 text-base md:text-lg lg:text-xl xl:text-2xl">Grande occasion ? Réserver un diner privé par téléphone</p>

      </div>
      
    );
  };
  
  export default Info;
  
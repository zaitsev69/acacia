// C:\Users\natha\code\acacia\components\info.jsx
const Info = ({ }) => {


  //fetch les files depuis /public
  const file1 = 'carte_acacia.pdf';
  const file2 = 'carte_petit_acacia.pdf';

  return (
    <div className="bg-primary lg:bg-grey text-white flex flex-col items-center justify-center lg:px-8 lg:py-12 lg:my-48">
      <h2 className="uppercase text-xl lg:text-gold lg:text-3xl underline text-center mb-4">
        Nos horaires et jours d&apos;ouverture
      </h2>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:w-full lg:text-primary ">
        <div className="flex flex-col items-center lg:w-1/2 lg:items-center lg:border-r lg:border-primary lg:pr-8">
          <p className="underline text-center mb-3 text-base lg:text-gold md:text-lg lg:text-2xl">L&apos;Acacia en Provence</p>
          <p className="text-center mb-1 text-base md:text-lg lg:text-2xl ">Cuisine semi-gastronomique</p>
          <p className="text-center mb-1 text-base md:text-lg lg:text-2xl ">Ouvert le vendredi soir, samedi soir et dimanche midi</p>
          <a href={`/uploads/${file1}`} target="_blank" rel="noopener noreferrer" className="text-center">
            <button className="bg-grey lg:bg-primary lg:text-white text-primary py-2 px-4 rounded mb-8 lg:mt-4 text-base md:text-lg lg:text-xl xl:text-2xl">Voir la carte</button>
          </a>
        </div>
        <div className="flex flex-col items-center lg:w-1/2 lg:pl-8 lg:items-center">
          <p className="underline text-center mb-3 text-base md:text-lg lg:text-gold lg:text-xl xl:text-2xl">Le Petit Acacia</p>
          <p className="text-center mb-1 text-base md:text-lg lg:text-xl xl:text-2xl">Grignotage, boissons et vins.</p>
          <p className="text-center mb-1 text-base md:text-lg lg:text-xl xl:text-2xl">Ouvert la journée du mercredi au samedi</p>
          <a href={`/uploads/${file2}`} target="_blank" rel="noopener noreferrer" className="text-center">
            <button className="bg-grey text-primary lg:bg-primary lg:text-white py-2 px-4  lg:mt-4 rounded text-base md:text-lg lg:text-xl xl:text-2xl mb-8">Voir la carte</button>
          </a>
        </div>
      </div>
      <p className="text-center mb-1 text-base md:text-lg lg:text-xl xl:text-2xl lg:text-primary mt-8">Grande occasion ? Réserver un diner privé par téléphone.</p>
    </div>

  );
};

export default Info;

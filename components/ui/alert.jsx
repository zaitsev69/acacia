const Alert = ({ isSuccess }) => {

  return (
      <div className={`top-4 right-2 fixed h-auto w-auto text-white z-[51] rounded-md p-4 alert-show ${isSuccess ? 'bg-green-500' : 'bg-red-500'}`}>
        {isSuccess ? 'Réservation effectuée avec succès !' : 'Une erreur s\'est produite. Veuillez nous contacter par téléphone.'}
      </div>
  );
};

export default Alert;

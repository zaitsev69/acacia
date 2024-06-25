const Booking = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/interior.jpeg')" }}>
            <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-md max-w-md w-full">

                <form className="space-y-4">
                    <h2 className="uppercase text-gold underline text-center text-xl sm:text-2xl">Réservation</h2>
                    <p className="text-center">Vous pouvez réserver par téléphone au<br></br> 04 90 65 44 25
                    ou via ce formulaire :</p>
                    <div>
                        <label htmlFor="name" className="block text-base font-medium text-gray-700">Nom:</label>
                        <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-base font-medium text-gray-700">Date:</label>
                        <input type="date" id="date" name="date" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-base font-medium text-gray-700">Numéro de Téléphone:</label>
                        <input type="tel" id="phone" name="phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="time" className="block text-base font-medium text-gray-700">Heure:</label>
                        <select id="time" name="time" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="11:30">11h30</option>
                            <option value="11:30">11h45</option>
                            <option value="12:00">12h00</option>
                            <option value="12:00">12h15</option>
                            <option value="12:30">12h30</option>
                            <option value="13:00">12h45</option>
                            <option value="13:30">13h00</option>
                            <option value="12:00">13h15</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="guests" className="block text-base font-medium text-gray-700">Nombre de Couverts:</label>
                        <input type="number" id="guests" name="guests" min="1" max="20" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="diet" className="block text-base font-medium text-gray-700 pb-1">Régime Particulier:</label>
                        <div id="diet" className="space-y-2">
                            <div>
                                <input type="checkbox" id="vegetarian" name="diet" value="vegetarian" className="mr-2" />
                                <label htmlFor="vegetarian">Végétarien</label>
                            </div>
                            <div>
                                <input type="checkbox" id="vegan" name="diet" value="vegan" className="mr-2" />
                                <label htmlFor="vegan">Végan</label>
                            </div>
                            <div>
                                <input type="checkbox" id="gluten-free" name="diet" value="gluten-free" className="mr-2" />
                                <label htmlFor="gluten-free">Sans Gluten</label>
                            </div>

                            <div>
                                <input type="checkbox" id="lactose-free" name="diet" value="lactose-free" className="mr-2" />
                                <label htmlFor="lactose-free">Sans Lactose</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-primary text-white font-medium rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Réserver
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Booking;



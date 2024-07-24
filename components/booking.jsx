"use client";

import { useEffect, useRef, useState } from 'react';
import Alert from './ui/alert';

const Booking = () => {

  const initialFormData = {
    name: '',
    date: '',
    phone: '',
    time: '',
    guests: '',
    diet: [],
    children: '',
  }

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState(false);
  const [showAlert, setShowAlert] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        diet: checked ? [...prev.diet, value] : prev.diet.filter((diet) => diet !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    if (result.success) {
      setShowAlert(true)
      setStatus(true);
      setFormData(initialFormData)
    }
  };

  return (
    <div id="booking" className="flex justify-center items-center bg-cover  lg:py-32 mt-4 mb-4 bg-local bg-center bg-[url('/inside.jpeg')] ">
      <div className="bg-white bg-opacity-80 p-6 shadow-md max-w-md w-full lg:max-w-4xl">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h2 className="uppercase text-gold underline text-center text-xl  lg:text-3xl">Réservation</h2>
          <p className="text-center text-base text-black lg:text-xl">Vous pouvez réserver par téléphone au<br /> 04 90 65 44 25 ou via ce formulaire :</p>

          <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
            <div>
              <label htmlFor="name" className="block text-base font-medium text-gray-700 lg:text-xl">Nom:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm lg:text-base"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-base font-medium text-gray-700 lg:text-xl">Numéro de Téléphone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 block text-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm lg:text-base"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-base font-medium text-gray-700 lg:text-xl">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm lg:text-base"
                min={new Date().toISOString().split('T')[0]}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-base font-medium text-gray-700 lg:text-xl">Heure:</label>
              <select
                id="time"
                name="time"
                required
                className="mt-1 block text-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm lg:text-base"
                onChange={handleChange}
              >
                <option value="12:00">12:00 (Uniquement le dimanche) </option>
                <option value="12:30">12:30 (Uniquement le dimanche)</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
              </select>
            </div>
            <div>
              <label htmlFor="guests" className="block text-base font-medium text-gray-700 lg:text-xl">Nombre de Couverts:</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="20"
                required
                className="mt-1 block text-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm lg:text-base"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="children" className="block text-base font-medium text-gray-700 lg:text-xl">Il y aura t&apos;il des enfants ?</label>
              <select
                id="children"
                defaultValue="Non"
                name="children"
                required
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm lg:text-base"
                onChange={handleChange}
              >
                <option className="text-black" value="Oui">Oui</option>
                <option className="text-black" value="Non">Non</option>
              </select>
            </div>
            <div className="lg:col-span-2">
              <label htmlFor="diet" className="block text-base font-medium text-gray-700 pb-1 lg:text-xl">Régime Particulier :</label>
              <div id="diet" className="space-y-2">

                <div>
                  <input
                    type="checkbox"
                    id="vegetarian"
                    name="diet"
                    value="vegetarian"
                    className="mr-2"
                    onChange={handleChange}
                  />
                  <label htmlFor="vegetarian" className="text-base lg:text-lg text-black">Végétarien</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="vegan"
                    name="diet"
                    value="vegan"
                    className="mr-2"
                    onChange={handleChange}
                  />
                  <label htmlFor="vegan" className="text-base lg:text-lg text-black">Végan</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="gluten-free"
                    name="diet"
                    value="gluten-free"
                    className="mr-2"
                    onChange={handleChange}
                  />
                  <label htmlFor="gluten-free" className="text-base lg:text-lg text-black">Sans Gluten</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="lactose-free"
                    name="diet"
                    value="lactose-free"
                    className="mr-2"
                    onChange={handleChange}
                  />
                  <label htmlFor="lactose-free" className="text-base lg:text-lg text-black">Sans Lactose</label>
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-primary text-white font-medium rounded-md shadow-sm lg:text-xl transition duration-300 ease-in-out transform hover:bg-blue-600 hover:shadow-lg active:scale-95">
            Réserver
          </button>
          {showAlert && <Alert isSuccess={status} />}
        </form>
      </div>
    </div>


  );
};

export default Booking;

// pages/contact.js
import React from 'react';
import GoogleMap from '../components/maps';

const Contact = () => {
  return (
    <div className="my-12 py-4 lg:mt-48 text-white bg-primary">
      <h2 className="uppercase underline text-center text-xl lg:text-4xl">Contact</h2>
      <div className="lg:flex lg:justify-between lg:items-center lg:mt-8 px-4 lg:px-16">
        <div className="text-lg mt-4 lg:mt-0 lg:w-1/2">
          <p className="text-xl lg:text-3xl text-center lg:text-left">• L&apos;Acacia en Provence</p>
          <div className="flex mt-4 lg:mt-8 justify-center lg:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <p className="ml-2 text-base lg:text-2xl">04 90 65 44 25</p>
          </div>
          <div className="flex mt-4 lg:mt-8 justify-center lg:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p className="ml-2 text-base lg:text-2xl">Rue de l&apos;Église 84190 La Roque-Alric</p>
          </div>
        </div>
        <div className="hidden lg:block ">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}

export default Contact;

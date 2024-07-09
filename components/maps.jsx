import React from 'react';

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2863.085190477327!2d5.062062176604177!3d44.14348812058213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ca78067a887651%3A0x4e727085e0638819!2sL&#39;Acacia%20en%20Provence!5e0!3m2!1sfr!2sfr!4v1720517757187!5m2!1sfr!2sfr"
      width="700"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMap;

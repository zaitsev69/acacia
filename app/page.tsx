// pages/index.js

import Header from '../components/Header';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Booking from '../components/booking';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Entry from '../components/entry';
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <head>
        <title>Maison l'Acacia</title>
        <link rel="stylesheet" href="https://use.typekit.net/moq5vrf.css" />
        <link rel="icon" href="/favicon.svg" sizes="full" />
      </head>
      <main className="bg-bg font-serenity font-light">
        <Header />
        <Entry />
        <Hero />
        <Info />
        <Booking />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

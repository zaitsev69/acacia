// pages/index.js

import Header from '../components/Header';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Booking from '../components/booking';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Entry from '../components/entry';


export default function Home() {
  return (
    <>
        <main className="bg-bg">
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

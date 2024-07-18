import Header from '../components/header';
import Hero from '../components/hero';
import Info from '../components/info';
import Booking from '../components/booking';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Entry from '../components/entry';


export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-grey lg:mx-24 lg:bg-bg ">
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

 import Navbar from '../components/Navbar/Navbar';
 import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Technology from '../components/Technology/Technology';
import WhyUs from '../components/WhyUs/WhyUs';
import About from '../components/About/About';
import Awards from '../components/Awards/Awards';
import Reviews from '../components/Reviews/Reviews';
import FAQ from '../components/FAQ/FAQ';
 import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function Home () {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Technology />
      <WhyUs />
      <About />
      <Reviews />
       <Awards /> 
        <FAQ /> 
      <Contact />
      <Footer />  
    </>
  );
};


import Hero from './Hero';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';
import Splash from './Splash';

const Homepage = ({ startAnimation }: { startAnimation: boolean }) => {
  return (
    <div className='w-full bg-black'>
      <Splash />
      <Hero startAnimation={startAnimation} />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;

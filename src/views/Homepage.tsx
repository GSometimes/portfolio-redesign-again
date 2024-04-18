import Hero from './Hero';
import About from './About';
import Work from './Work';
import Contact from './Contact';

const Homepage = ({ startAnimation }: { startAnimation: boolean }) => {
  return (
    <div className='w-full bg-black'>
      <Hero startAnimation={startAnimation} />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Homepage;

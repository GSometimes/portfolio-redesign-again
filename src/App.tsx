import About from './views/About';
import Contact from './views/Contact';
import Hero from './views/Hero';
import Work from './views/Work';

function App() {
  return (
    <div className='min-h-dvh w-full bg-black space-y-16 overscroll-contain'>
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;

import About from './views/About';
import Hero from './views/Hero';
import Work from './views/Work';

function App() {
  return (
    <div className='min-h-dvh w-full bg-black cursor-potato'>
      <Hero />
      <About />
      <Work />
    </div>
  );
}

export default App;

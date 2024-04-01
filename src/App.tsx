import About from './views/About';
import Hero from './views/Hero';
import Work from './views/Work';

function App() {
  return (
    <div className='min-h-dvh w-full bg-black space-y-16'>
      <Hero />
      <About />
      <Work />
    </div>
  );
}

export default App;

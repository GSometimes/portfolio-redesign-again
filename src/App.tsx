import Hero from './views/Hero';
import Work from './views/Work';

function App() {
  return (
    <div className='min-h-dvh w-full bg-black cursor-potato overscroll-none'>
      <Hero />
      <div className='h-screen w-full flex items-center justify-center font-black text-3xl text-white'>
        <h1>Placeholder</h1>
      </div>
      <Work />
    </div>
  );
}

export default App;

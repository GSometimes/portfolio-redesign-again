import { useEffect, useState } from 'react';
import Homepage from './views/Homepage';
import Splash from './views/Splash';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState<boolean>(true);
  const [startHeroAnimation, setStartHeroAnimation] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
      setTimeout(() => setStartHeroAnimation(true), 750);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='w-full bg-black overscroll-none'>
      <AnimatePresence>
        {isSplashVisible ? (
          <Splash key='splash' />
        ) : (
          <Homepage startAnimation={startHeroAnimation} key='homepage' />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

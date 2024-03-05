import { motion } from 'framer-motion';
import Nav from '../components/nav/Nav';
import { ScreenFitText } from '../components/textfit/ScreeFitText';

const Hero = () => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.06,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  const oneLiner = 'Developing your window to the web.';
  return (
    <section className='text-silver h-dvh flex flex-col items-center justify-between'>
      <div className='h-1/2 w-full flex flex-col items-start justify-center gap-2 sm:gap-0'>
        <ScreenFitText text='Gore Auluck' />
        <motion.div
          variants={sentence}
          className='flex items-center justify-center text-lg sm:text-2xl lg:text-4xl font-serif px-2 sm:px-6'
          initial='hidden'
          animate='visible'
        >
          <span className='sr-only'>{oneLiner}</span>
          {oneLiner.split('').map((char, index) => (
            <motion.span key={`${char} - ${index}`} variants={letter}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <Nav />
    </section>
  );
};

export default Hero;

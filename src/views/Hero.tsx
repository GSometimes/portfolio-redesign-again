import { motion, Variants } from 'framer-motion';
import Nav from '../components/nav/Nav';
import ScreenFitText from '../components/textfit/ScreeFitText';

const Hero = ({ startAnimation }: { startAnimation: boolean }) => {
  const heroContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        ease: 'easeInOut',
      },
    },
  };

  const heroItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <section className='text-silver h-[calc(100dvh)] flex flex-col items-center justify-evenly gap-12 sm:gap-0 sm:justify-between py-4'>
      <motion.div
        variants={heroContainerVariants}
        initial='hidden'
        animate={startAnimation ? 'show' : 'hidden'}
        className='w-full flex flex-col items-start justify-center gap-2 sm:gap-4 font-monospace'
      >
        <motion.div variants={heroItemVariants} className='w-full px-2'>
          <ScreenFitText text='Gore Auluck' />
        </motion.div>
        <motion.p
          className='text-lg sm:text-2xl lg:text-4xl px-4 sm:px-6 lg:px-8 font-bold'
          variants={heroItemVariants}
        >
          Developing your window to the web.
        </motion.p>
        <motion.p
          className='text-sm sm:text-base md:text-lg px-4 sm:px-6 lg:px-8 max-w-[1280px]'
          variants={heroItemVariants}
        >
          From the kitchen to coding, I'm a frontend developer blending three
          years of experience in tech with a decade of culinary creativity. I
          love diving into new things and adding my own touch to whatever I work
          on. I'm all about getting better, being creative, and helping out
          where I can.
        </motion.p>
      </motion.div>
      <Nav />
    </section>
  );
};
export default Hero;

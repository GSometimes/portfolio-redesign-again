import { easeInOut, motion, Variants } from 'framer-motion';
import Nav from '../components/nav/Nav';
import ScreenFitText from '../components/textfit/ScreeFitText';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: easeInOut } },
  };

  return (
    <section className='text-silver min-h-dvh h-screen flex flex-col items-center justify-between'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='show'
        className='w-full h-1/2 flex flex-col items-start justify-center gap-2 sm:gap-4 font-monospace'
      >
        <motion.div variants={itemVariants} className='w-full'>
          <ScreenFitText text='Gore Auluck' />
        </motion.div>
        <motion.p
          className='text-lg sm:text-2xl lg:text-4xl px-4 sm:px-6 lg:px-8 font-bold'
          variants={itemVariants}
        >
          Developing your window to the web.
        </motion.p>
        <motion.p
          className='text-sm sm:text-base px-4 sm:px-6 lg:px-8 max-w-[768px]'
          variants={itemVariants}
        >
          I'm a frontend developer with a culinary background, blending 10 years
          of culinary creativity with 3 years of tech.
        </motion.p>
      </motion.div>
      <Nav />
    </section>
  );
};

export default Hero;

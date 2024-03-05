import { AnimatePresence, motion } from 'framer-motion';
import DoubleHelix from '../doubleHelix/DoubleHelix';
import arrowRight from '../../assets/arrowRight.svg';

const Marquee = () => {
  const hoverVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
  };

  return (
    <div className='overflow-hidden whitespace-nowrap bg-red rounded-many-big h-full flex flex-col justify-between relative p-8'>
      <div className='flex items-center justify-between'>
        <h1 className='font-sans font-bold text-3xl md:text-4xl z-10 text-silver'>
          Frontend Developer
        </h1>
      </div>
      <div className='flex items-center justify-end z-10'>
        <img src={arrowRight} alt='' className='w-16 sm:w-20' />
      </div>
      <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
        <DoubleHelix />
      </div>
      <AnimatePresence>
        <motion.div
          className='absolute inset-0 flex items-center justify-center z-20'
          initial='hidden'
          whileHover='visible'
          variants={hoverVariants}
        >
          <motion.div
            className='bg-black absolute inset-0'
            variants={overlayVariants}
          />
          <div className='z-20'>
            <p className='font-bold text-xl sm:text-2xl lg:text-3xl font-serif tracking-widest text-silver text-wrap'>
              Designing your window to the web...
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Marquee;

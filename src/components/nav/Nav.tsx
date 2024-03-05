import { motion } from 'framer-motion';
import { useMediaQuery } from '../../utils/useMediaQuery';

const Nav = () => {
  const matches = useMediaQuery('(min-width: 1536px)');
  const oneLiner = 'Frontend developer with three years of experience.';
  console.log(oneLiner.split(' '));

  const sentence = {
    hidden: { opacity: 0 },
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

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 3,
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2, ease: 'easeInOut' },
    },
  };

  return (
    <>
      {/* Above 1536px styling */}
      {matches && (
        <nav className='flex flex-col md:flex-row item-center justify-center w-full gap-2 p-4 overflow-hidden'>
          <motion.div
            className='w-full md:w-2/5 flex items-center font-serif tracking-normal sm:tracking-wide text-xl px-4'
            variants={sentence}
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
          <motion.ul
            className='w-full md:w-3/5  gap-8 flex items-center justify-end'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.li
              className='w-56 bg-silver text-black  flex items-center justify-center relative text-4xl p-4 font-sans font-black tracking-widest hover:text-dark-green rounded-3xl'
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Work
            </motion.li>
            <motion.li
              className='w-56 bg-silver text-black  flex items-center justify-center relative text-2xl md:text-3xl xl:text-4xl p-4 font-sans font-black tracking-widest hover:text-dark-green rounded-3xl'
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              About
            </motion.li>
            <motion.li
              className='w-56 bg-silver text-black  flex items-center justify-center relative text-2xl md:text-3xl xl:text-4xl p-4 font-sans font-black tracking-widest hover:text-dark-green rounded-3xl'
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Contact
            </motion.li>
          </motion.ul>
        </nav>
      )}

      {/* Below 1536px styling */}
      {!matches && (
        <nav className='flex flex-col lg:flex-row item-center justify-center w-full gap-8 sm:gap-6 px-2 py-4'>
          <motion.div
            variants={sentence}
            initial='hidden'
            animate='visible'
            className='flex items-center font-serif tracking-normal sm:tracking-wide text-lg sm:text-xl px-0 sm:px-4 text-light-green w-full break-word flex-wrap'
          >
            <span className='sr-only'>{oneLiner}</span>
            {oneLiner.split('').map((char, index) => (
              <motion.span key={`${char} - ${index}`} variants={letter}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>

          <motion.ul
            className='w-full gap-4 lg:gap-6 flex flex-col sm:flex-row items-center justify-end'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.li
              className='w-full lg:w-40 bg-silver text-black  flex items-center justify-center relative text-xl sm:text-2xl md:text-3xl p-4 font-sans font-black tracking-normal hover:text-dark-green rounded-3xl'
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Work
            </motion.li>
            <motion.li
              className='w-full lg:w-40 bg-silver text-black  flex items-center justify-center relative text-xl sm:text-2xl md:text-3xl p-4 font-sans font-black tracking-normal hover:text-dark-green rounded-3xl'
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              About
            </motion.li>
            <motion.li
              className='w-full lg:w-40 bg-silver text-black  flex items-center justify-center relative text-xl sm:text-2xl md:text-3xl p-4 font-sans font-black tracking-normal hover:text-dark-green rounded-3xl'
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Contact
            </motion.li>
          </motion.ul>
        </nav>
      )}
    </>
  );
};

export default Nav;

import { AnimatePresence, motion } from 'framer-motion';
// import { useMediaQuery } from '../../utils/useMediaQuery';
import { useState } from 'react';

const Nav = () => {
  // const matches = useMediaQuery('(min-width: 1536px)');
  // const oneLiner = 'Frontend developer with three years of experience.';
  const [scrolling, setScrolling] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  // // one liner variant
  // const sentence = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       delay: 0.2,
  //       staggerChildren: 0.06,
  //     },
  //   },
  // };

  // const letter = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: { duration: 0.5, ease: 'easeInOut' },
  //   },
  // };

  // nav items variant
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  // fixed nav variants
  const fixedNavVariants = {
    initial: {
      y: -50,
      x: '-50%',
      opacity: 0,
    },
    animate: {
      y: 0,
      x: '-50%',
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
    },
  };

  return (
    <>
      {/* Above 1536px styling */}
      {/* {matches && ( */}
      <nav className='flex flex-row item-center justify-center w-full gap-2 p-4'>
        {/* <motion.div
            className='w-full md:w-2/5 flex items-center font-monospace tracking-normal sm:tracking-wide text-xl px-4'
            variants={sentence}
            initial='hidden'
            animate='visible'
          >
            <span className='sr-only'>{oneLiner}</span>
            {oneLiner.split('').map((char, index) => (
              <motion.span
                key={`${char} - ${index}`}
                variants={letter}
                aria-hidden='true'
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div> */}
        <motion.ul
          className='w-full gap-8 flex flex-col md:flex-row items-center justify-evenly font-monospace'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.li
            className='w-full md:w-1/3 outline text-silver  flex items-center justify-center relative text-2xl md:text-3xl lg:text-5xl xl:text-7xl p-4 font-black tracking-wide hover:text-orange-peel rounded-3xl'
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Work
          </motion.li>
          <motion.li
            className='w-full md:w-1/3  outline text-silver  flex items-center justify-center relative text-2xl md:text-3xl lg:text-5xl xl:text-7xl p-4 font-black tracking-wide hover:text-orange-peel rounded-3xl'
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            About
          </motion.li>
          <motion.li
            className='w-full md:w-1/3  outline text-silver  flex items-center justify-center relative text-2xl md:text-3xl lg:text-5xl xl:text-7xl p-4 font-black tracking-wide hover:text-orange-peel rounded-3xl'
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Contact
          </motion.li>
        </motion.ul>
      </nav>
      {/* )} */}

      {/* Below 1536px styling */}
      {/* {!matches && (
        <nav className='flex flex-col lg:flex-row item-center justify-center w-full gap-4 sm:gap-6 px-2 py-4 mb-2 sm:mb-0'>
          <motion.div
            variants={sentence}
            initial='hidden'
            animate='visible'
            className='flex items-center font-monospace tracking-normal sm:tracking-wide text-lg sm:text-xl px-0 sm:px-4 text-light-green w-full break-word flex-wrap'
          >
            <span className='sr-only'>{oneLiner}</span>
            {oneLiner.split('').map((char, index) => (
              <motion.span
                key={`${char} - ${index}`}
                variants={letter}
                aria-hidden='true'
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>

          <motion.ul
            className='w-full gap-2 sm:gap-4 lg:gap-6 flex flex-row items-center justify-end font-monospace'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.li
              className='w-full lg:w-40 outline text-silver flex items-center justify-center relative text-lg sm:text-2xl md:text-3xl p-2 sm:p-4 font-black tracking-normal hover:text-orange-peel rounded-3xl'
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Work
            </motion.li>
            <motion.li
              className='w-full lg:w-40 outline text-silver flex items-center justify-center relative text-lg sm:text-2xl md:text-3xl p-2 sm:p-4 font-black tracking-normal hover:text-orange-peel rounded-3xl'
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              About
            </motion.li>
            <motion.li
              className='w-full lg:w-40 outline text-silver flex items-center justify-center relative text-lg sm:text-2xl md:text-3xl p-2 sm:p-4 font-black tracking-normal hover:text-orange-peel rounded-3xl'
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Contact
            </motion.li>
          </motion.ul>
        </nav>
      )} */}

      {scrolling && (
        <AnimatePresence>
          <motion.nav
            initial='initial'
            animate='animate'
            exit='exit'
            variants={fixedNavVariants}
            className='fixed z-50 px-4 py-2 rounded-3xl left-1/2 top-5 bg-black/75 text-silver outline'
          >
            <ul className='flex items-center gap-4 font-monospace font-bold'>
              <li className='px-2 hover:text-orange-peel transition-all duration-200'>
                Work
              </li>
              <li className='px-2 hover:text-orange-peel transition-all duration-200'>
                About
              </li>
              <li className='px-2 hover:text-orange-peel transition-all duration-200'>
                Contact
              </li>
            </ul>
          </motion.nav>
        </AnimatePresence>
      )}
    </>
  );
};

export default Nav;

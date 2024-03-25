import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const handleScroll = () => {
    setScrolling(window.scrollY >= window.innerHeight);
  };

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getScrollDuration = () => {
    return screenWidth <= 768 ? 500 : 0;
  };

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  const fixedNavVariants: Variants = {
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
      <nav className='flex flex-row item-center justify-center w-full gap-2 p-4'>
        <motion.ul
          className='w-full gap-8 flex flex-col md:flex-row items-center justify-evenly font-monospace'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.li
            className='w-full md:w-1/3 text-silver flex items-center justify-center text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-black tracking-wide hover:text-orange-peel outline rounded-3xl cursor-pointer p-2.5 sm:p-4'
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            <Link
              to='work'
              smooth={true}
              offset={-50}
              duration={500}
              className='w-full text-center'
            >
              Work
            </Link>
          </motion.li>
          <motion.li
            className='w-full md:w-1/3 text-silver flex items-center justify-center text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-black tracking-wide hover:text-orange-peel outline rounded-3xl cursor-pointer p-2.5 sm:p-4'
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            <Link to='' className='w-full text-center'>
              About
            </Link>
          </motion.li>
          <motion.li
            className='w-full md:w-1/3 text-silver flex items-center justify-center text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-black tracking-wide hover:text-orange-peel outline rounded-3xl cursor-pointer p-2.5 sm:p-4'
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            <Link to='' className='w-full text-center'>
              Contact
            </Link>
          </motion.li>
        </motion.ul>
      </nav>

      {scrolling && (
        <AnimatePresence>
          <motion.nav
            initial='initial'
            animate='animate'
            exit='exit'
            variants={fixedNavVariants}
            className='fixed z-50 px-4 py-2 rounded-3xl left-1/2 top-2.5 bg-black/75 backdrop-blur-3xl text-silver outline'
          >
            <ul className='flex items-center justify-center gap-4 font-monospace font-bold'>
              <li className='px-2 hover:text-orange-peel transition-all duration-200 cursor-pointer'>
                <Link to='work' smooth={true} offset={-50} duration={500}>
                  Work
                </Link>
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

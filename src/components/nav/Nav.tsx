import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    let scrollTimeoutId: number;

    const handleScroll = () => {
      setScrolling(window.scrollY >= window.innerHeight);
      clearTimeout(scrollTimeoutId);
      scrollTimeoutId = setTimeout(() => {
        setScrolling(false);
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeoutId);
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.25,
      },
    },
  };

  const navItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
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
      <nav
        className='flex flex-row item-center justify-center w-full gap-2 p-4'
        aria-labelledby='main-nav'
      >
        <motion.ul
          className='w-full gap-8 flex flex-col md:flex-row items-center justify-evenly font-monospace'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <Link
            to='about'
            smooth={true}
            duration={500}
            className='w-full md:w-1/3 text-center'
          >
            <motion.li
              className='w-full  text-silver flex items-center justify-center text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-black tracking-wide hover:text-orange-peel outline rounded-3xl cursor-pointer p-2.5 sm:p-4'
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              variants={navItemVariants}
            >
              About
            </motion.li>
          </Link>
          <Link
            to='work'
            smooth={true}
            duration={750}
            className='w-full md:w-1/3 text-center'
          >
            <motion.li
              className='w-full text-silver flex items-center justify-center text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-black tracking-wide hover:text-orange-peel outline rounded-3xl cursor-pointer p-2.5 sm:p-4'
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              variants={navItemVariants}
            >
              Work
            </motion.li>
          </Link>
          <Link
            to='contact'
            smooth={true}
            duration={1000}
            className='w-full md:w-1/3 text-center'
          >
            <motion.li
              className='w-full  text-silver flex items-center justify-center text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-black tracking-wide hover:text-orange-peel outline rounded-3xl cursor-pointer p-2.5 sm:p-4'
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              variants={navItemVariants}
            >
              Contact
            </motion.li>
          </Link>
        </motion.ul>
      </nav>

      <AnimatePresence>
        {scrolling && (
          <motion.nav
            initial='initial'
            animate='animate'
            exit='exit'
            variants={fixedNavVariants}
            className='fixed z-50 px-4 py-2 rounded-3xl left-1/2 top-5 bg-black/75 backdrop-blur-3xl text-silver outline'
            aria-labelledby='fixed-nav'
          >
            <ul className='flex items-center justify-center gap-4 font-monospace font-bold'>
              <Link to='about' smooth={true} duration={625}>
                <li className='px-2 hover:text-orange-peel transition-all duration-200 cursor-pointer'>
                  About
                </li>
              </Link>
              <Link to='work' smooth={true} duration={625}>
                <li className='px-2 hover:text-orange-peel transition-all duration-200 cursor-pointer'>
                  Work
                </li>
              </Link>
              <Link to='contact' smooth={true} duration={625}>
                <li className='px-2 hover:text-orange-peel transition-all duration-200 cursor-pointer'>
                  Contact
                </li>
              </Link>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;

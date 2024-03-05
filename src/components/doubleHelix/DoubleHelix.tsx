import { motion } from 'framer-motion';

const DoubleHelix = () => {
  const spanVariants = {
    rotateY: { rotateY: 360 },
  };

  const containerVariants = {
    rotateZ: { rotateZ: 360 },
  };

  const getSpanClasses = (index: number): string => {
    const isBlack = index % 3 === 0;
    return `w-40 sm:w-52 md:w-64 h-3 border-2 border-dashed my-2 relative ${
      isBlack
        ? 'border-black before:content-[""] before:absolute before:-top-[6px] before:left-[-16px] before:w-5 before:h-5 before:bg-black before:rounded-full after:content-[""] after:absolute after:-top-[6px] after:right-[-16px] after:w-5 after:h-5 after:bg-black after:rounded-full'
        : 'border-white before:content-[""] before:absolute before:-top-[6px] before:left-[-16px] before:w-5 before:h-5 before:bg-white before:rounded-full after:content-[""] after:absolute after:-top-[6px] after:right-[-16px] after:w-5 after:h-5 after:bg-white after:rounded-full'
    }`;
  };

  return (
    <motion.div
      className='flex flex-col items-center justify-center relative'
      variants={containerVariants}
      animate='rotateZ'
      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
    >
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.span
          className={getSpanClasses(index)}
          variants={spanVariants}
          animate='rotateY'
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 0.1,
          }}
          key={index}
        />
      ))}
    </motion.div>
  );
};

export default DoubleHelix;

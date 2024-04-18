import { motion } from 'framer-motion';

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.75 } }}
      exit={{ opacity: 0, transition: { duration: 0.75 } }}
      className='text-white [font-size:_clamp(2rem,5vw,5rem)] font-bold text-left h-screen w-full flex items-center justify-center font-monospace bg-black p-4'
    >
      <h1 className='p-4'>I'm just a potato trying to be a Hasselback.</h1>
    </motion.div>
  );
};

export default Splash;

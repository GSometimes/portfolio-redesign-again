import { ProjectData } from '../../data/ProjectData';
import { motion } from 'framer-motion';

const Card = () => {
  return (
    <motion.div className='w-full rounded-3xl py-10 px-5 sm:py-20 sm:px-10 outline font-monospace flex flex-col gap-4 hover:outline-orange-peel'>
      <div className='flex flex-col items-start gap-2 w-full'>
        <p className='text-sm sm:text-base'>{ProjectData[0].tech}</p>
        <h1 className='text-3xl font-bold text-orange-peel'>
          {ProjectData[0].title}
        </h1>
      </div>
      <div className='flex flex-col items-start text-base sm:text-xl gap-6 w-full'>
        <p className=''>{ProjectData[0].description}</p>
        <motion.a
          href={ProjectData[0].link}
          target='_blank'
          rel='noreferrer'
          className='outline rounded-2xl text-xl p-4 hover:outline-orange-peel hover:text-orange-peel'
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.95 }}
        >
          View Lesson
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Card;

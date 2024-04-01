import { motion, Variants, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

type CardProps = {
  title: string;
  tech: string;
  description: string;
  link?: string;
};

const Card = ({ title, tech, description, link }: CardProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.33 });

  useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [controls, isInView]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={controls}
      className='w-full rounded-3xl py-10 px-5 sm:py-20 sm:px-10 outline font-monospace flex flex-col gap-4 hover:outline-orange-peel'
    >
      <div className='flex flex-col items-start gap-2 w-full'>
        <p className='text-sm sm:text-base'>{tech}</p>
        <h1 className='text-3xl font-bold text-orange-peel'>{title}</h1>
      </div>
      <div className='flex flex-col items-start text-base sm:text-xl gap-6 w-full'>
        <p>{description}</p>
        {link && (
          <motion.a
            href={link}
            target='_blank'
            rel='noreferrer'
            className='outline rounded-2xl text-xl p-4 hover:outline-orange-peel hover:text-orange-peel'
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
          >
            View Lesson
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default Card;

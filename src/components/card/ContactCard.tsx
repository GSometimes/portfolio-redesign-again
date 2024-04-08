import { useEffect, useRef } from 'react';
import { contactData } from '../../data/ContactData';
import { motion, Variants, useAnimation, useInView } from 'framer-motion';

const ContactCard = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [controls, isInView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <div className='w-full px-4 lg:px-8'>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial='hidden'
        animate={controls}
        className='grid justify-center grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8'
      >
        {contactData.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target='_blank'
            rel='noreferrer'
            variants={cardVariants}
            className='rounded-3xl px-4 py-5 md:py-10 sm:px-6 lg:px-8 outline hover:outline-orange-peel hover:text-orange-peel font-monospace font-black tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center'
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
          >
            {contact.form}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactCard;

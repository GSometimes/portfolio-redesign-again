import { contactData } from '../../data/ContactData';
import { motion } from 'framer-motion';

const ContactCard = () => {
  return (
    <div className='w-full px-4 lg:px-8'>
      <div className='grid justify-center grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8'>
        {contactData.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target='_blank'
            rel='noreferrer'
            className='rounded-3xl px-4 py-5 md:py-10 sm:px-6 lg:px-8 outline hover:outline-orange-peel hover:text-orange-peel font-monospace font-black tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center'
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
          >
            {contact.form}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;

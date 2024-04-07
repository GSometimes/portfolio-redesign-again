import { contactData } from '../../data/ContactData';
import { motion } from 'framer-motion';

const ContactCard = () => {
  return (
    <div className='w-full px-4 lg:px-8 my-16'>
      {/* <ul className='w-full rounded-3xl py-10 px-4 sm:py-20 sm:px-8 lg:px-14 outline font-monospace flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12 hover:outline-orange-peel text-xl md:text-2xl lg:text-3xl text-light-green sm:text-silver  font-black tracking-wide'>
        {contactData.map((contact, index) => (
          <li key={index} className='hover:text-orange-peel'>
            <a href={contact.link}>{contact.text}</a>
          </li>
        ))}
      </ul> */}
      <div className='grid justify-center grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 font-monospace'>
        {contactData.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target='_blank'
            rel='noreferrer'
            className='rounded-3xl py-10 px-4 sm:py-20 sm:px-8 lg:px-12 outline hover:outline-orange-peel hover:text-orange-peel'
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

// sm:[&>*:last-child]:ml-auto

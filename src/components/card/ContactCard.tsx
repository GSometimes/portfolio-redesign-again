const ContactCard = () => {
  return (
    <div className='w-full px-4 lg:px-8 my-16'>
      <ul className='w-full rounded-3xl py-10 px-5 sm:py-20 sm:px-10 outline font-monospace flex items-center gap-4 hover:outline-orange-peel [&>*:last-child]:ml-auto text-sm sm:text-base '>
        <li className='hover:text-orange-peel'>
          <a href='https://www.linkedin.com/in/gore-auluck/'>LinkedIn</a>
        </li>
        <li className='hover:text-orange-peel'>
          <a href='https://github.com/GSometimes'>Github</a>
        </li>
        <li className='hover:text-orange-peel'>
          <a href='https://drive.google.com/file/d/1bg9jbPY4iZthCn5vxnpPWSb0c8EwtZe7P6l4onyCrV4/view'>
            Resume
          </a>
        </li>
        <li className='hover:text-orange-peel'>
          <a href='mailto:gore.auluck@gmail.com'>gore.auluck@gmail.com</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactCard;

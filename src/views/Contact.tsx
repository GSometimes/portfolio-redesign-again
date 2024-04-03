import ScreenFitText from '../components/textfit/ScreeFitText';

const Contact = () => {
  return (
    <section
      id='contact'
      className='text-silver min-h-screen flex flex-col items-center gap-4 sm:gap-8'
    >
      <div className='w-full px-2'>
        <ScreenFitText
          text='Drop A Line'
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: 'easeInOut' },
            },
          }}
        />
      </div>
    </section>
  );
};

export default Contact;

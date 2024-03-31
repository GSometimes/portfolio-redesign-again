import ScreenFitText from '../components/textfit/ScreeFitText';

const About = () => {
  return (
    <section
      id='about'
      className='text-silver min-h-screen flex flex-col items-center gap-4 sm:gap-8'
    >
      <div className='w-full px-2'>
        <ScreenFitText
          text='Story Of Me'
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

export default About;

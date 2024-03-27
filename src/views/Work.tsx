import Card from '../components/card/Card';
import ScreenFitText from '../components/textfit/ScreeFitText';

const Work = () => {
  return (
    <section
      id='work'
      className='text-silver h-[100dvh] flex flex-col items-center gap-4 sm:gap-8'
    >
      <div className='w-full px-2'>
        <ScreenFitText
          text='Recent Work'
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
      <div className='w-full px-4 lg:px-8'>
        <Card />
      </div>
    </section>
  );
};

export default Work;

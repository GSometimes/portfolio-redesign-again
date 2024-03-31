import Card from '../components/card/Card';
import ScreenFitText from '../components/textfit/ScreeFitText';
import { RecentWorkData, FutureWorkData } from '../data/ProjectData';

const Work = () => {
  return (
    <section
      id='work'
      className='text-silver h-full flex flex-col items-center gap-4 sm:gap-8'
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
      <div className='flex flex-col items-center gap-8 w-full px-4 lg:px-8 my-12 sm:my-24'>
        {RecentWorkData.map((work, index) => (
          <Card key={index} {...work} />
        ))}
      </div>
      <div className='w-full px-2'>
        <ScreenFitText
          text='Future Work'
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
      <div className='flex flex-col items-center gap-8 w-full px-4 lg:px-8 my-12 sm:my-24'>
        {FutureWorkData.map((work, index) => (
          <Card key={index} {...work} />
        ))}
      </div>
    </section>
  );
};

export default Work;

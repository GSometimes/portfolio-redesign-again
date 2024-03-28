import Card from '../components/card/Card';
import ScreenFitText from '../components/textfit/ScreeFitText';
import { ProjectData } from '../data/ProjectData';

const Work = () => {
  return (
    <section
      id='work'
      className='text-silver min-h-dvh flex flex-col items-center gap-4 sm:gap-8'
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
        {ProjectData.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Work;

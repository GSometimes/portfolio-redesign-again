import ScreenFitText from '../components/textfit/ScreeFitText';
import { aboutData } from '../data/AboutData';
import Paragraph from '../components/paragraph/Paragraph';

const About = () => {
  return (
    <section
      id='about'
      className='text-silver h-[calc(100dvh)] flex flex-col items-center justify-center gap-4 sm:gap-8 py-4'
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
      <div className='text-base sm:text-lg md:text-xl font-monospace flex flex-col items-start gap-12 px-4 sm:px-6 lg:px-8 my-8 sm:my-16 lg:my-24'>
        {aboutData.map((paragraph, index) => (
          <Paragraph key={index} text={paragraph.text} />
        ))}
      </div>
    </section>
  );
};

export default About;

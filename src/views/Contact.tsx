import Paragraph from '../components/paragraph/Paragraph';
import ScreenFitText from '../components/textfit/ScreeFitText';

const Contact = () => {
  return (
    <section
      id='contact'
      className='text-silver h-screen flex flex-col items-center justify-between gap-4 sm:gap-8 font-monospace'
    >
      <div className='w-full h-1/2 flex flex-col items-start justify-center gap-2 sm:gap-4 font-monospace'>
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
        <div className='flex flex-col gap-8 max-w-[1280px] px-4 sm:px-6 lg:px-8 text-sm sm:text-base md:text-lg'>
          <div className='font-bold text-lg sm:text-2xl lg:text-4xl'>
            <Paragraph text={'On the lookout for my next adventure!'} />
          </div>
          <Paragraph
            text={
              "I'm searching for my next role in front-end development, ideally crafting and nurturing a component library for web or mobile. However, I'm open to any remote opportunity where I can flex my creative muscles and build solutions that reach and resonate with users. Beyond the code, I'm passionate about connecting with others in the tech community. Whether it's swapping stories about our tech journeys, discussing the latest in food or gaming, or exploring ways we can support each other's growth, I'm here for it. Let's chat about how we can create impactful work together and make our tech community a bit more connected."
            }
          />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Contact;

import ContactCard from '../components/card/ContactCard';
import Paragraph from '../components/paragraph/Paragraph';
import ScreenFitText from '../components/textfit/ScreeFitText';

const Contact = () => {
  return (
    <section
      id='contact'
      className='text-silver h-screen flex flex-col items-center justify-between gap-4 sm:gap-8 font-monospace'
    >
      <div className='w-full h-full flex flex-col items-start justify-center gap-2 sm:gap-4'>
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
              "I am looking for my next opportunity in frontend development, ideally in a role where I'll be helping to build and maintain a component library for web or mobile, but I am open to any remote opportunity where I can be creative and impact a users experience directly. Beyond coding, I love chatting about tech, food, and games, and I'm always here to share a story or lend an ear. Let's connect and craft something amazing together. Drop me a line and let's chat!"
            }
          />
          <Paragraph text={'The End.'} />
        </div>
        <div className='w-full my-12'>
          <ContactCard />
        </div>
      </div>
    </section>
  );
};

export default Contact;

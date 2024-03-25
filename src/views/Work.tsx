// import React from 'react';
import ScreenFitText from '../components/textfit/ScreeFitText';

// will need to fix bug where animation can potentially get triggered when empty space is in view
// need to check if more that 50% of the text is in view

const Work = () => {
  return (
    <section
      id='work'
      className='text-silver h-[100dvh] flex flex-col items-center justify-between'
    >
      <div className='w-full'>
        <ScreenFitText
          text='Recent Work'
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 2,
                ease: 'easeInOut',
              },
            },
          }}
        />
      </div>
    </section>
  );
};

export default Work;

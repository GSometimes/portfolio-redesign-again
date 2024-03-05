import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';

export const ScreenFitText = ({ text }: { text: string }) => {
  const staggerText = {
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
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const resizeText = useCallback(() => {
    const container = containerRef.current;
    const textElement = textRef.current;

    if (!container || !textElement) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      textElement.style.fontSize = `${mid}px`;

      if (textElement.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    textElement.style.fontSize = `${max}px`;
  }, []);

  useEffect(() => {
    resizeText();
    window.addEventListener('resize', resizeText);
    return () => window.removeEventListener('resize', resizeText);
  }, [text, resizeText]);

  return (
    <div
      className='flex flex-col w-full items-center overflow-hidden leading-tight'
      ref={containerRef}
    >
      <span className='sr-only'>{text}</span>
      <motion.span
        aria-hidden='true'
        initial='hidden'
        animate='visible'
        className='mx-auto whitespace-normal sm:whitespace-nowrap text-left sm:text-center font-bold uppercase text-green-700 sm:text-purple-600 md:text-blue-500 lg:text-silver font-sans px-2 xl:text-amber-600'
        ref={textRef}
      >
        {text.split(' ').map((word, index) => (
          <span key={index}>
            <motion.span key={word} variants={staggerText} ref={textRef}>
              {word}
            </motion.span>

            {index === 0 && <span className='inline-block'>&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </div>
  );
};

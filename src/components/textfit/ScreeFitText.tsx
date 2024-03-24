import { motion, Variants, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ScreenFitTextProps {
  text: string;
  variants: Variants;
}

const ScreenFitText = ({ text, variants }: ScreenFitTextProps) => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  // const fadeInText = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 2, ease: 'easeInOut' } },
  // };

  const defaultVariants = variants;

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const resizeText = () => {
    const container = containerRef.current;
    const textElement = textRef.current;

    if (!container || !textElement) return;

    let min = 1,
      max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      textElement.style.fontSize = `${mid}px`;

      if (textElement.offsetWidth <= container.offsetWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    textElement.style.fontSize = `${max}px`;
  };

  useEffect(() => {
    resizeText();
    window.addEventListener('resize', resizeText);
    return () => window.removeEventListener('resize', resizeText);
  }, [text]);

  return (
    <div
      ref={containerRef}
      className='flex flex-col w-full items-center overflow-hidden leading-tight'
    >
      <span className='sr-only'>{text}</span>
      <motion.span
        aria-hidden='true'
        initial='hidden'
        animate={controls}
        variants={defaultVariants}
        className='mx-auto whitespace-normal sm:whitespace-nowrap text-left sm:text-center font-bold uppercase font-monospace px-2 text-orange-peel'
        ref={textRef}
      >
        {text.split(' ').map((word, index, array) => (
          <>
            <motion.span key={index} variants={defaultVariants}>
              {word}
            </motion.span>
            {index < array.length - 1 && <span>&nbsp;</span>}
          </>
        ))}
      </motion.span>
    </div>
  );
};

export default ScreenFitText;

import { motion, Variants, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ScreenFitTextProps {
  text: string;
  variants?: Variants;
}

const ScreenFitText = ({ text, variants }: ScreenFitTextProps) => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

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

    let min = 1;
    let max = 2500;

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
    document.fonts.ready.then(() => {
      resizeText();
    });
    window.addEventListener('resize', resizeText);
    return () => window.removeEventListener('resize', resizeText);
  }, [text]);

  return (
    <motion.div
      ref={containerRef}
      className='flex flex-col w-full items-center overflow-hidden leading-none'
      initial='hidden'
      animate={controls}
    >
      <span className='sr-only'>{text}</span>
      <motion.span
        aria-hidden='true'
        variants={defaultVariants}
        className='mx-auto whitespace-normal sm:whitespace-nowrap text-center sm:text-center font-bold uppercase font-monospace text-orange-peel'
        ref={textRef}
      >
        {text.split(' ').map((word, index, array) => (
          <>
            <span key={index}>{word}</span>
            {index < array.length - 1 && <span>&nbsp;</span>}
          </>
        ))}
      </motion.span>
    </motion.div>
  );
};

export default ScreenFitText;

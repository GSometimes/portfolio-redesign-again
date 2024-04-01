// AnimatedParagraph.tsx

import { motion, Variants, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

type ParagraphProps = {
  text: string;
};

const Paragraph = ({ text }: ParagraphProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [controls, isInView]);

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <motion.p
      ref={ref}
      variants={paragraphVariants}
      initial='hidden'
      animate={controls}
    >
      {text}
    </motion.p>
  );
};

export default Paragraph;

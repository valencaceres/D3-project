// Carousel.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps {
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className='flex w-full justify-center h-[80vh]'>
        <div className='h-[70vh] flex flex-row'>
        <AnimatePresence custom={currentIndex}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          style={{ overflow: 'hidden' }}
          onAnimationComplete={() => handleNext()}
        >
          <motion.img
            src={items[currentIndex]}
            alt={`Item ${currentIndex}`}
            style={{ height: '70vh' }}
          />
        </motion.div>
      </AnimatePresence>
        </div>
    </div>
  );
};

export default Carousel;
import Carousel from './Carousel';
import { motion } from 'framer-motion';
import Star1 from './img/Star 1.png';
import Star2 from './img/Star 2.png';
function LeftSection() {
  const carouselAnimation = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.4, duration: 1.2 },
    },
  };
  const Star2Animation = {
    hidden: {
      x: -30,
      scale: 0.7,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: { delay: 0.4, duration: 1.2 },
    },
  };
  const Star1Animation = {
    hidden: {
      x: 50,
      scale: 0.7,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: { delay: 0.4, duration: 1.2 },
    },
  };
  return (
    <motion.div className='left'>
      <motion.div
        variants={carouselAnimation}
        initial='hidden'
        animate='show'
        className='carousel_wrapper'
      >
        <Carousel />
      </motion.div>
      <motion.img
        src={Star2}
        alt='star2'
        className='star__absolute star2'
        initial='hidden'
        animate='show'
        variants={Star2Animation}
      />
      <motion.img
        src={Star1}
        alt='1'
        className='star__absolute star1'
        initial='hidden'
        animate='show'
        variants={Star1Animation}
      />
    </motion.div>
  );
}

export default LeftSection;

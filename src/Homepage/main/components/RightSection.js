import { motion } from 'framer-motion';
import Card from './Card';
import Category from '../../img/category.png';
import Eye from '../../img/solid_eye.png';
import BadHabit from '../../img/dangerous-rounded.png';
function RightSection() {
  const textAnimation = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.4, duration: 1 },
    },
  };
  const Cards = {
    show: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.9,
      },
    },
  };
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: 'tween', duration: 3.5, bounce: 0 },
        opacity: { duration: 1 },
      },
    },
  };
  return (
    <div className='right'>
      <motion.h2 variants={textAnimation} initial='hidden' animate='show'>
        Change you habits &
      </motion.h2>
      <motion.h1 variants={textAnimation} initial='hidden' animate='show'>
        Organise your life
      </motion.h1>
      <motion.div
        className='cards'
        initial='hidden'
        animate='show'
        variants={Cards}
      >
        <Card title='A lot of categories' url={Category}></Card>
        <Card title='Track you progres' url={Eye}></Card>
        <Card title='Get rid of bad habits' url={BadHabit}></Card>
      </motion.div>
      <motion.svg
        viewBox='0 0 199 109'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='vector_line'
        initial='hidden'
        animate='visible'
      >
        <motion.path
          d='M-1.02474 0.0065524C0.000480763 2.98689 1.58173 5.74301 2.32893 8.83545C8.3596 36.1393 25.3196 55.6423 46.6185 71.4565C53.9495 76.9039 63.3665 80.7022 72.4798 82.5221C98.4022 88.0684 124.442 87.4264 149.989 79.8725C157.355 77.7102 164.445 74.0432 171.092 69.2622C168.619 69.1282 165.951 68.911 163.394 68.9723C156.002 69.0442 148.526 69.3113 141.107 68.9093C137.967 68.7211 134.661 67.3066 131.634 65.7802C130.467 65.2809 129.469 62.7744 129.776 61.5194C130.083 60.2644 132.169 58.6153 133.225 58.836C151.925 60.8301 170.493 57.2217 189.058 55.2301C195.562 54.5469 198.533 56.7426 198.61 63.0141C198.65 78.5122 195.245 93.4604 188.755 107.551C188.588 107.942 187.56 108.195 185.892 108.867C176.258 99.6619 185.106 88.6601 183.729 76.2869C181.365 78.0481 179.557 79.5852 177.722 80.6484C140.269 100.437 100.944 102.558 60.7148 92.2759C54.658 90.8396 48.6029 87.7866 43.1874 84.3141C23.3861 71.4513 8.17452 54.3138 -1.14093 32.5363C-4.10734 25.4905 -5.0441 17.4647 -6.148 9.82951C-6.70076 6.82027 -5.28012 3.50012 -4.69353 0.516279C-3.4706 0.34637 -2.24767 0.176463 -1.02474 0.0065524Z'
          stroke='black'
          strokeWidth='3'
          variants={draw}
        />
      </motion.svg>
    </div>
  );
}

export default RightSection;

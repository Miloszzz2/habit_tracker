import Card from './Card';
import Category from '../img/category.png';
import Eye from '../img/solid_eye.png';
import BadHabit from '../img/dangerous-rounded.png';
import { motion } from 'framer-motion';
function Main() {
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
  return (
    <>
      <section id='main'>
        <div className='left'></div>
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
        </div>
      </section>
    </>
  );
}

export default Main;

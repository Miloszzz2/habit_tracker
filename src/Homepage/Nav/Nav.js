import logo from '../img/logo.png';
import Search from '../img/bx_search.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Nav() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  const listAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delay: 0.6,
      },
    },
  };
  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  const lastItem = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.25,
      },
    },
  };
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: 'tween', duration: 4.5, bounce: 0 },
        opacity: { duration: 1 },
      },
    },
  };
  return (
    <>
      <section id='nav'>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 30, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.25 }}
          className='wrapper'
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='logo'
          >
            <img src={logo} alt='logo' />
          </motion.div>
          <div className='menu'>
            <motion.ul
              variants={listAnimation}
              initial='hidden'
              animate='show'
              className='links'
            >
              <motion.li variants={item}>
                <Link to='/blog'>Blog</Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to='/login'>Login</Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to='/signup'>Signup</Link>
              </motion.li>
              <motion.li
                className={isActive ? 'extended' : ''}
                variants={lastItem}
              >
                <div className={`input-field ${isActive ? 'active' : ''}`}>
                  <input type='text' id='search_input'></input>
                </div>
                <img
                  src={Search}
                  alt='search'
                  className='search_img'
                  onClick={handleToggle}
                />
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>

        <motion.svg
          viewBox='0 0 3530 1358'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='vector_line'
          initial='hidden'
          animate='visible'
        >
          <motion.path
            d='M2.33478 555.436C-18.479 295.03 935.431 43.2328 1692.17 13.249C2682.73 -25.9997 3159.8 11.573 3105.33 555.436C3004.33 1563.91 2066.5 1320.75 2125.5 1096.25M2125.5'
            stroke='black'
            strokeWidth='3'
            variants={draw}
          />

          <motion.path
            d='M2125.5 1096.25H2141.33C2149.83 1096.25 2141.1 1093.86 2125.5 1081.46C2110.3 1093.46 2102.83 1098.95 2108.33 1097.45L2125.5 1096.25Z'
            fill='black'
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 4.5 }}
          />
        </motion.svg>
      </section>
    </>
  );
}

export default Nav;

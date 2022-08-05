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
        delayChildren: 0.6,
        delay: 0.3,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
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
  return (
    <>
      <section id='nav'>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
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
      </section>
    </>
  );
}

export default Nav;

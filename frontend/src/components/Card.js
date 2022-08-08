import { motion } from 'framer-motion';
function Card({ title, url }) {
  const CardItem = {
    hidden: {
      x: -50,
      y: 0,
      opacity: 0,
      boxShadow: '-6px 6px 0px 4px rgba(0, 0, 0, 1)',
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <>
      <motion.div
        className='card'
        whileHover={{
          x: 6,
          y: -6,
          boxShadow: '-15px 15px 0px 4px rgba(0, 0, 0, 1)',
        }}
        animate={{ x: 0 }}
        variants={CardItem}
      >
        <img src={url} alt={`icon ${title}`} />
        <h1>{title}</h1>
      </motion.div>
    </>
  );
}
export default Card;

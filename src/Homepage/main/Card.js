import { motion } from 'framer-motion';
function Card({ title, url }) {
  return (
    <>
      <motion.div className='card' whileHover={{ x: 10, y: -10, zIndex: 10 }}>
        <img src={url} alt={`icon ${title}`} />
        <h1>{title}</h1>
        <motion.div className='blackbackground'></motion.div>
      </motion.div>
    </>
  );
}
export default Card;

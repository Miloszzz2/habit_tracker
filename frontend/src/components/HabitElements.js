import Delete from './img/delete.png';
import { motion, AnimatePresence } from 'framer-motion';
function HabitElements({ elements, text, setElements, setText }) {
  const deleteItem = (findId, setVisible) => {
    const newElements = elements.filter((el) => el.id !== findId);
    setElements(newElements);
    setTimeout(() => {
      setVisible();
    }, 390);
  };
  const setTextVisible = () => {
    if (elements.length === 1) {
      setText(false);
    }
  };
  return (
    <div className='habit_elements'>
      <p style={{ display: text ? 'none' : '' }}>
        Your habits will be shown here
      </p>
      <AnimatePresence>
        {elements.map((el) => {
          return (
            <motion.div
              className='habit_element'
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0, background: 'rgb(252, 41, 41)' }}
              transition={{ duration: 0.4 }}
              key={el.id}
            >
              <div>
                <span>{el.title}</span>
                <div className='checkboxes'>
                  <div>
                    <label>
                      <input type='checkbox' name='monday' />
                      Mon
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type='checkbox' name='tuesday' />
                      Tue
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type='checkbox' name='wednesday' />
                      Wed
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type='checkbox' name='thursday' />
                      Thu
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type='checkbox' name='friday' />
                      Fri
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type='checkbox' name='saturdya' />
                      Sat
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type='checkbox' name='sunday' />
                      Sun
                    </label>
                  </div>
                </div>
              </div>
              <img
                src={Delete}
                alt='delete'
                className='delete'
                onClick={() => deleteItem(el.id, setTextVisible)}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default HabitElements;

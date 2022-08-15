import HabitInput from '../components/HabitInput';
import HabitElements from '../components/HabitElements';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Demo() {
  const [inputValue, setInputValue] = useState('');
  const [elements, setElements] = useState([]);
  const [text, setText] = useState(false);
  const [focused, setFocused] = useState(false);
  const addItem = () => {
    if (inputValue.length !== 0) {
      const item = {
        title: inputValue,
        id: uuidv4(),
      };
      setElements([item, ...elements]);
      setText(true);
      setInputValue('');
    } else {
      toast.error('Type habit name', {
        position: 'bottom-left',
        theme: 'dark',
      });
    }
  };

  return (
    <>
      <section id='demo'>
        <HabitInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          addItem={addItem}
          focused={focused}
          setFocused={setFocused}
        />
        <HabitElements
          text={text}
          elements={elements}
          setElements={setElements}
          setText={setText}
        />
        <ToastContainer pauseOnHover={false} />
      </section>
    </>
  );
}

export default Demo;

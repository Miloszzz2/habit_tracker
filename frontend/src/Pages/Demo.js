import EmojiPicker from '../components/EmojiPicker';
import HabitElements from '../components/HabitElements';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function Demo() {
  const [inputValue, setInputValue] = useState('');
  const [elements, setElements] = useState([]);
  const [text, setText] = useState(false);
  const addItem = () => {
    const item = {
      title: inputValue,
      id: uuidv4(),
    };
    setElements([item, ...elements]);
    setText(true);
    setInputValue('');
  };
  return (
    <>
      <section id='demo'>
        <EmojiPicker
          inputValue={inputValue}
          setInputValue={setInputValue}
          addItem={addItem}
        />
        <HabitElements
          text={text}
          elements={elements}
          setElements={setElements}
          setText={setText}
        />
      </section>
    </>
  );
}

export default Demo;

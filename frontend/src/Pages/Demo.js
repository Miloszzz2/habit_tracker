//import { Link } from 'react-router-dom';
import EmojiPicker from '../components/EmojiPicker';
import { useState } from 'react';
function Demo() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <section id='demo'>
        <EmojiPicker inputValue={inputValue} setInputValue={setInputValue} />
        <div className='habit_elements'></div>
      </section>
    </>
  );
}

export default Demo;

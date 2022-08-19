import Picker from 'emoji-picker-react';
import { useState, useRef, useEffect } from 'react';
import Emoji from './img/emoji.png';
import Plus from './img/plus.png';
function HabitInput({
  inputValue,
  setInputValue,
  addItem,
  focused,
  setFocused,
}) {
  const [showPicker, setShowPicker] = useState(false);
  const emojiInput = useRef(null);
  const onEmojiClick = (event, emojiObject) => {
    setInputValue(inputValue + emojiObject.emoji);
    setShowPicker(false);
    emojiInput.current.focus();
  };
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (focused) {
        if (event.key === 'Enter') {
          addItem();
        }
      }
    };
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [addItem, focused]);

  return (
    <div className='demo_input'>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        ref={emojiInput}
        placeholder='Write your habit here and click plus icon'
      />
      <img src={Plus} alt='plus' className='plus_icon' onClick={addItem} />
      <img
        src={Emoji}
        alt='emoji picker'
        onClick={() => setShowPicker(!showPicker)}
      />
      {showPicker && (
        <Picker
          disableSkinTonePicker={true}
          onEmojiClick={onEmojiClick}
          pickerStyle={{ position: 'absolute', top: '108%', right: '-40%' }}
        />
      )}
    </div>
  );
}
export default HabitInput;

import Picker from 'emoji-picker-react';
import { useState, useRef } from 'react';
import Emoji from './img/emoji.png';
import Plus from './img/plus.png';
function EmojiPicker({ inputValue, setInputValue }) {
  const [showPicker, setShowPicker] = useState(false);
  const emojiInput = useRef(null);
  const onEmojiClick = (event, emojiObject) => {
    setInputValue(inputValue + emojiObject.emoji);
    setShowPicker(false);
    emojiInput.current.focus();
  };
  return (
    <div className='demo_input'>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={emojiInput}
        placeholder='Write your habit here and click plus icon'
      />
      <img src={Plus} alt='plus' className='plus_icon' />
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
export default EmojiPicker;

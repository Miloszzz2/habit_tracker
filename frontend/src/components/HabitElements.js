import Delete from './img/delete.png';
function HabitElements({ elements, text, setElements, setText }) {
  const deleteItem = (findId) => {
    const newElements = elements.filter((el) => el.id !== findId);
    setElements(newElements);
    console.log(elements.length);
    if (elements.length === 1) {
      setText(false);
    }
  };
  return (
    <div className='habit_elements'>
      <p style={{ display: text ? 'none' : '' }}>
        Your habits will be shown here
      </p>
      {elements.map((el) => {
        return (
          <div className='habit_element' key={el.id}>
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
              onClick={() => deleteItem(el.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default HabitElements;

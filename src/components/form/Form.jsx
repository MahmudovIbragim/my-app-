import React, { useState } from 'react'

const Form = ({texts, setTexts}) => {
const [inputValue, setInputValue] = useState('')
  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setTexts([...texts, { id: Math.random(), text: inputValue }]);
            setInputValue('')
          }}
        >
          Добавить
        </button>
      </div>
      
    </div>
  );
}

export default Form
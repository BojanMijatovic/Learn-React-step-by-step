import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const options = [
  {
    label: 'Africans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  console.log(text);
  return (
    <div>
      <div className='ui form'>
        <div className='ui field'>
          <label>Enter Text</label>
          <input
            type='text'
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
      </div>
      <Dropdown
        label='Select a language'
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;

import './Button.css';

import { useState } from 'react';

const Button = (props) => {
  const [newTest, setNewTest] = useState('Here is test');

  const test = 'some lorem text is here';

  const signUp = () => {
    let message = 'Here is message';
    props.onShowMessage(message);
    // set new name for test via useState Hook
    setNewTest(test);
  };

  return (
    <div>
      <button className='btn' onClick={signUp}>
        Contact us
      </button>
      <p>{newTest}</p>
    </div>
  );
};

export default Button;

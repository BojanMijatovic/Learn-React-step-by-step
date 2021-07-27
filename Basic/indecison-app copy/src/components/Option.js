import React from 'react';

const Option = ({ optionText, removeSingleOption }) => {
  return (
    <div className=''>
      {optionText}

      <button onClick={() => removeSingleOption(optionText)}>remove</button>
    </div>
  );
};

export default Option;

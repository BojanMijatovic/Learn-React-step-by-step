import React from 'react';
import Option from './Option';

const Options = ({ options, deleteAllOptions, removeSingleOption }) => {
  const lengthOptions = options.length;
  return (
    <div className=''>
      <h3>Options</h3>
      <p>Yo now have {lengthOptions} options</p>
      {options.length === 0 && <p>No options</p>}
      <ul className='options'>
        {options.map((option, index) => {
          return <Option key={index + 1} optionText={option} removeSingleOption={removeSingleOption} />;
        })}
      </ul>
      <button onClick={deleteAllOptions}>Remove all</button>
    </div>
  );
};

export default Options;

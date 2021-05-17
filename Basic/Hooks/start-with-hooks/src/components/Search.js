import React, { useState } from 'react';

const Search = () => {
  const [input, setInput] = useState('');

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      Search
      <input type='text' onChange={(e) => onChangeInput(e)} />
      <h3>{input}</h3>
    </div>
  );
};

export default Search;

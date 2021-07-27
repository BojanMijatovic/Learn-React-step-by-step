import React from 'react';

const Action = ({ randomPickOption }) => {
  return (
    <div className='action'>
      <button onClick={randomPickOption}>Random</button>
    </div>
  );
};

export default Action;

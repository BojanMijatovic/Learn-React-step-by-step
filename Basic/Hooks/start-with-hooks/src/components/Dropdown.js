import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // brain damage :)
  useEffect(() => {
    document.body.addEventListener(
      'click',
      (e) => {
        if (ref.current.contains(e.target)) {
          return;
        }
        setOpen(false);
      },
      { capture: true }
    );
  }, []);
  // map options
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className='item'
        onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div className='ui form' ref={ref}>
      <div className='field'>
        <label className='label'>Select Color</label>
        <div
          className={`ui selection dropdown  ${open ? 'visible active' : ''}`}
          onClick={() => setOpen(!open)}>
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

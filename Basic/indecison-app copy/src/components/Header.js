import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <div className='header'>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision',
  //  subtitle: 'A simple app to test the indecision module',
  subtitle: 'Some subtitle',
};

export default Header;

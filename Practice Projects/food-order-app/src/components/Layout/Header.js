import React from 'react';

import mealsImage from '../../assets/meals.jpg';

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <h1>Food Order App</h1>
        <button>Cart</button>
      </header>
      <div className=''>
        <img src={mealsImage} alt='' />
      </div>
    </React.Fragment>
  );
};
export default Header;

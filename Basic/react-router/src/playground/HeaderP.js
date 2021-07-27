import React, { Fragment } from 'react';

import { NavLink } from 'react-router-dom';

const HeaderP = (params) => {
  return (
    <Fragment>
      <h1>HeaderP</h1>
      <NavLink to='/' exact={true}>
        home
      </NavLink>
      <NavLink to='/work'>work</NavLink>
      <NavLink to='/help'>help</NavLink>
    </Fragment>
  );
};

export default HeaderP;

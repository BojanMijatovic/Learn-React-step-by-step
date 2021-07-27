import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Work = (props) => {
  return (
    <Fragment>
      <NavLink to='work/project1' exact={true}>
        Project 1
      </NavLink>
      <NavLink to='work/project2'>Project 2</NavLink>
    </Fragment>
  );
};

export default Work;

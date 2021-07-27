import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderP from './HeaderP';
import Home from './Home';
import Work from './Work';
import Help from './Help';
import NotFound from './NotFound';

const Portfolio = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <HeaderP />
        <Switch>
          <Route path='/' component={Home} exact={true} />
          <Route path='/work' component={Work} />
          <Route path='/help' component={Help} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default Portfolio;

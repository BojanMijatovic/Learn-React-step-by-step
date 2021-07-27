import React, { Fragment } from 'react';
import { BrowserRouter, Route, NavLink, IndexRoute, Switch } from 'react-router-dom';

import App from '../components/App';
import Header from '../components/Header';
import Create from '../components/Create';
import Edit from '../components/Edit';
import Help from '../components/Help';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route exact={true} path='/' component={App} />
          <Route path='/create' component={Create} />
          <Route path='/edit' component={Edit} />
          <Route path='/help' component={Help} />
          <Route component={NotFoundPage} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default AppRouter;

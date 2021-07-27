import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, IndexRoute } from 'react-router-dom';

import App from './components/App';
import Create from './components/Create';
import Edit from './components/Edit';
import Help from './components/Help';

const route = (
  <BrowserRouter>
    <Fragment>
      <Route exact={true} path='/' component={App} />
      <Route path='/create' component={Create} />
      <Route path='/edit' component={Edit} />
      <Route path='/help' component={Help} />
    </Fragment>
  </BrowserRouter>
);

ReactDOM.render(route, document.getElementById('root'));

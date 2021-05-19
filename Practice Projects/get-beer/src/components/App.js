import React, { useState } from 'react';

import FilterBeer from './FilterBeer';
import Header from './Header';
import ListBeers from './ListBeers';
import './style/App.module.scss';

const App = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <Header />
      <FilterBeer onBeerSelected={(items) => setResults(items)} />
      <ListBeers results={results} />
    </div>
  );
};
export default App;

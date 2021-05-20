import React, { useState } from 'react';

import Search from './Search';
import ShowSingleCountry from './ShowSingleCountry';
const SingleCountry = () => {
  const [country, setCountry] = useState({});

  // console.log(country);

  return (
    <div>
      <Search showCountry={(country) => setCountry(country)} />
      <ShowSingleCountry country={country} />
      <button
        onClick={() => {
          setCountry({});
        }}>
        Clear
      </button>
    </div>
  );
};

export default SingleCountry;

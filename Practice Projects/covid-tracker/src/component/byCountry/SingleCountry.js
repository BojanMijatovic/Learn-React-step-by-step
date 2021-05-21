import React, { useState } from 'react';
import Search from './Search';
import ShowSingleCountry from './ShowSingleCountry';
import styles from './SingleCountry.module.css';
const SingleCountry = () => {
  const [country, setCountry] = useState({});

  // console.log(country);

  return (
    <div className={styles.singleCountry}>
      <Search showCountry={(country) => setCountry(country)} />
      <ShowSingleCountry country={country} />
      <button
        className={styles.btn}
        onClick={() => {
          setCountry({});
        }}>
        Clear
      </button>
    </div>
  );
};

export default SingleCountry;

import React, { useState } from 'react';
import Search from './Search';
import ShowSingleCountry from './ShowSingleCountry';
import styles from '../style/layout/_singleCountryContainer.module.scss';
const SingleCountry = () => {
  const [country, setCountry] = useState({});

  console.log(country);

  return (
    <div className={styles.singleCountry}>
      <Search showCountry={(country) => setCountry(country)} />
      <ShowSingleCountry country={country} />
      <button
        className={styles.clearBtn}
        onClick={() => {
          setCountry({});
        }}>
        Clear
      </button>
    </div>
  );
};

export default SingleCountry;

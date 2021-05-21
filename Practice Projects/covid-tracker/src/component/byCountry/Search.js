import React, { useState } from 'react';
import axios from 'axios';
import styles from './Search.module.css';

const Search = ({ showCountry }) => {
  const [search, setSearch] = useState('');

  //  for single Country
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.caw.sh/v3/covid-19/countries/${search}`,
      {
        params: {
          strict: true,
        },
      }
    );

    if (search) {
      showCountry(response.data);
      setSearch('');
    }
  };

  return (
    <div className={styles.search}>
      <h2>Single Country</h2>
      <form onSubmit={(e) => onFormSubmit(e)} className={styles.form}>
        <label>Search:</label>
        <input
          type='text'
          placeholder='by country'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Search;

import React, { useState } from 'react';
import axios from 'axios';
import styles from './style/layout/FilterBeer.module.scss';

const FilterBeer = ({ onBeerSelected }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get('https://api.punkapi.com/v2/beers', {
      params: {
        beer_name: term,
        per_page: 10,
      },
    });

    if (term) {
      onBeerSelected(response.data);
      setTerm('');
    }
  };

  return (
    <div className={styles.filterBeer}>
      <form className={styles.form} onSubmit={(e) => onFormSubmit(e)}>
        <input
          type='text'
          className={styles.input}
          placeholder='find some beer'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type='submit' className={styles.button}>
          find beer
        </button>
      </form>
    </div>
  );
};

export default FilterBeer;

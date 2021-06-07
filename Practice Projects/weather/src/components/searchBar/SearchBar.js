import styles from './SearchBar.module.scss';
import { useState } from 'react';

const SearchBar = ({ findCity }) => {
  const [city, setCity] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(city);
    findCity(city);
    setCity('');
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='find city'
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button type='submit' className={styles.btn}>
        find
      </button>
    </form>
  );
};

export default SearchBar;

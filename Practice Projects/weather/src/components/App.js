import { useState } from 'react';
import styles from './App.module.scss';
import Header from './header/Header';
import SearchBar from './searchBar/SearchBar';
import SearchResult from './searchResult/SearchResult';

const App = () => {
  const [city, setCity] = useState('');
  const findCity = (term) => {
    setCity(term);
  };

  return (
    <div className={styles.app}>
      <Header />
      <SearchBar findCity={findCity} />
      <SearchResult city={city} />
    </div>
  );
};

export default App;

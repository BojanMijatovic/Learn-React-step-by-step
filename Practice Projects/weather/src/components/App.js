import styles from './App.module.scss';
import Header from './header/Header';
import SearchBar from './searchBar/SearchBar';
import SearchResult from './searchResult/SearchResult';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <SearchBar />
      <SearchResult />
    </div>
  );
};

export default App;

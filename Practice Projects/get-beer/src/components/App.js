import FilterBeer from './FilterBeer';
import Header from './Header';
import ListBeers from './ListBeers';
import './style/App.module.scss';

const App = () => {
  return (
    <div>
      <Header />
      <FilterBeer />
      <ListBeers />
    </div>
  );
};
export default App;

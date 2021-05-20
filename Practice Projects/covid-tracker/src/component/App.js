import SingleCountry from './byCountry/SingleCountry';
import Header from './Header';
import WorldStats from './WorldStats';

const App = () => {
  return (
    <div>
      <Header />
      <WorldStats />
      <SingleCountry />
    </div>
  );
};

export default App;

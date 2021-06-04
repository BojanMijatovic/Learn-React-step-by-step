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
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        placeholder='find city'
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button type='submit'>find</button>
    </form>
  );
};

export default SearchBar;

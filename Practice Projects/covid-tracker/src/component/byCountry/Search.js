import React, { useState } from 'react';
import axios from 'axios';

// axios.get('https://api.covid19api.com/'
//  for total on world https://disease.sh/v3/covid-19/all

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
    // console.log(response.data);

    // setCountry(response.data);

    showCountry(response.data);
  };

  return (
    <div>
      <form onSubmit={(e) => onFormSubmit(e)}>
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

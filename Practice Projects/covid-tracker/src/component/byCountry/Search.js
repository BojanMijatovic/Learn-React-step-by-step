import React, { useState } from 'react';
import axios from 'axios';

// axios.get('https://api.covid19api.com/'

/*
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get('https://api.punkapi.com/v2/beers', {
      params: {
        beer_name: term,
        per_page: 16,
      },
    });

    if (term) {
      onBeerSelected(response.data);
      setTerm('');
    }
  };
*/

const Search = () => {
  const [search, setSearch] = useState('');

  //  for total on world https://disease.sh/v3/covid-19/all

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.caw.sh/v3/covid-19/countries/${search}`,
      {
        params: {
          country: search,
          strict: true,
        },
      }
    );
    console.log(response);
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

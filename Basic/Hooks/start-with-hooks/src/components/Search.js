import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  //  use State HOOK
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  console.log(results);
  //  use Effect HOOK
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(data.query);
    };

    if (term) {
      search();
    }
  }, [term]);

  return (
    <div>
      Search
      <div className='ui form'>
        <div className='field'>
          <label htmlFor='search'>Enter search term</label>
          <input
            type='text'
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
      </div>
      <h3>{term}</h3>
    </div>
  );
};

export default Search;

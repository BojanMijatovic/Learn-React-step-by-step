import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  //  use State HOOK
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

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
      setResults(data.query.search);
    };

    const timeoutId = setTimeout(() => {
      //  set if we don`t have default search term
      if (term) {
        search();
      }
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  //  map results
  const renderedResults = results.map((result, id) => {
    return (
      <div className='item' key={result.pageid}>
        <div className='right content floated'>
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className='ui button'>
            go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;

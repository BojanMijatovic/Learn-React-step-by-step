import { useState, useEffect } from 'react';
import axios from 'axios';
import ShowCity from '../showCity/ShowCity';

const SearchResult = ({ city }) => {
  const [newCity, setNewCity] = useState(city);

  useEffect(() => {
    const findCity = async () => {
      const { data } = await axios.get(
        'https://community-open-weather-map.p.rapidapi.com/weather',
        {
          params: {
            q: city,
            lat: '0',
            lon: '0',
            lang: 'null',
            units: 'metric',
            mode: 'xml, html',
          },
          headers: {
            'x-rapidapi-key':
              '3d7b8e731fmsh2951c6fedb466ffp1a2e60jsn8cd6cebaf653',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          },
        }
      );
      setNewCity(data);
    };
    const timeoutId = setTimeout(() => {
      //  set if we don`t have default search term
      if (city) {
        findCity();
      }
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [city]);
  console.log(newCity);
  return <ShowCity newCity={newCity} />;
};

export default SearchResult;

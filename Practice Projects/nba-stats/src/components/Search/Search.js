import { useState } from 'react';
import axios from 'axios';
import Container from '../style/ui/Container';
import ShowList from '../ShowList/ShowList';

const Search = () => {
  const [player, setPlayer] = useState('');
  const [listPlayers, setListPlayers] = useState([]);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `https://api-nba-v1.p.rapidapi.com/players/firstName/${player}`,
      {
        headers: {
          'x-rapidapi-key':
            '3d7b8e731fmsh2951c6fedb466ffp1a2e60jsn8cd6cebaf653',
          'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
        },
      }
    );

    setListPlayers(response.data.api.players);
    console.log(response.data.api.players);
    setPlayer('');
  };

  return (
    <Container>
      <form onSubmit={onFormSubmit}>
        <input
          type='text'
          placeholder='find player'
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
        />
        <button type='submit'>find</button>
      </form>
      <ShowList listPlayers={listPlayers} />
      <button
        onClick={() => {
          setListPlayers([]);
        }}>
        clear
      </button>
    </Container>
  );
};

export default Search;

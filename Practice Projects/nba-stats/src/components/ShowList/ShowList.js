import SinglePlayer from '../style/ui/SinglePlayer';
import axios from 'axios';
const ShowList = ({ listPlayers }) => {
  const players = listPlayers.map((player) => {
    return (
      <SinglePlayer>
        <li>
          {player.firstName} {player.lastName}
        </li>
        {console.log(response.data)}
      </SinglePlayer>
    );
  });
  return <div>{players}</div>;
};

export default ShowList;

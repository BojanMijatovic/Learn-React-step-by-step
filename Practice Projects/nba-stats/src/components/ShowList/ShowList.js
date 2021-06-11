import SinglePlayer from '../style/ui/SinglePlayer';

const ShowList = ({ listPlayers }) => {
  const players = listPlayers.map((player) => {
    return (
      <SinglePlayer>
        <li>
          {player.firstName} {player.lastName}
        </li>
      </SinglePlayer>
    );
  });
  return <div>{players}</div>;
};

export default ShowList;

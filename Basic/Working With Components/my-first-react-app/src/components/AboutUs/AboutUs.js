import NewButton from './NewButton';

const AboutUs = (props) => {
  const btnText = 'Meet our Team';

  const team = ['team1', 'team2'];

  const addTeam = (newTeam) => {
    team.push(newTeam);
    console.log(team);
  };

  return (
    <div>
      <p>{props.aboutText}</p>
      <NewButton btnText={btnText} onAddTeam={addTeam} />
    </div>
  );
};

export default AboutUs;

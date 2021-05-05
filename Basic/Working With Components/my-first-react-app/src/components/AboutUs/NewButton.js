const NewButton = (props) => {
  const newAddTeam = 'Test-1';

  const newTeamHandler = () => {
    props.onAddTeam(newAddTeam);
  };

  return <button onClick={newTeamHandler}>Show Team</button>;
};

export default NewButton;

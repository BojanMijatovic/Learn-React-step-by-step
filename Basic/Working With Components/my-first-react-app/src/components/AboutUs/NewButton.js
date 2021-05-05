const NewButton = (props) => {
  const newAddTeam = 'Test-1';

  //  send data from child to parent
  const newTeamHandler = () => {
    props.onAddTeam(newAddTeam);
  };

  return <button onClick={newTeamHandler}>{props.btnTextHandler}</button>;
};

export default NewButton;

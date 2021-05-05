import NewButton from './NewButton';
import { useState } from 'react';

const AboutUs = (props) => {
  // work with useState Hooks
  const [showTeam, setShowTeam] = useState('');
  const testTeam = ['test-team1', 'test-team2', 'test-team3'];

  const useHook = () => {
    setShowTeam(testTeam);
  };

  //  add name button via props
  const btnText = 'Meet our Team';
  const team = ['team1', 'team2'];

  //  receive data from child to parent
  const addTeam = (newTeam) => {
    team.push(newTeam);
    console.log(team);
  };

  return (
    <div>
      <p>{props.aboutText}</p>
      <NewButton btnTextHandler={btnText} onAddTeam={addTeam} />
      <button onClick={useHook}>Show test Team</button>
      <div>{showTeam}</div>
    </div>
  );
};

export default AboutUs;

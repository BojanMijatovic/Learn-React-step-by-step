import { useState } from 'react';

const UpdateCounter = (props) => {
  const [newScore, setNewScore] = useState(1);
  const [newDownScore, setNewDownScore] = useState('');

  // const upScore = () => {
  //   setNewScore(n++);
  // };

  // const downScore = () => {
  //   setNewDownScore(n--);
  // };

  const upNewScore = () => {
    console.log(props.test);
    setNewScore(props.test++);
    console.log(props.test);
  };

  const downNewScore = () => {
    console.log(props.test);
  };
  return (
    <div>
      <p>{newScore}</p>
      <button onClick={upNewScore}>+</button>
      <button onClick={downNewScore}>-</button>
    </div>
  );
};
export default UpdateCounter;

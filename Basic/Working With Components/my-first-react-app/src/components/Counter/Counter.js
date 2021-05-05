import UpdateCounter from './UpdateCounter';

const Counter = () => {
  let counterNum = 0;
  return (
    <div>
      <UpdateCounter test={counterNum} />
    </div>
  );
};

export default Counter;

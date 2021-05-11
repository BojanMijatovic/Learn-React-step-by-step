const Car = (props) => {
  return (
    <div>
      <h4>Name {props.carName}</h4>
      <p>Model {props.carModel}</p>
    </div>
  );
};

Car.defaultProps = {
  carName: 'Insert car',
  carModel: 'Add model please',
};

export default Car;

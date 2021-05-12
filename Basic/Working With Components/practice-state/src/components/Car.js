import styles from './Car.module.css';

const Car = (props) => {
  return (
    <div className={styles.car}>
      <h4>Name: {props.carName}</h4>
      <p>Model: {props.carModel}</p>
    </div>
  );
};
//  add default props
Car.defaultProps = {
  carName: 'Insert car',
  carModel: 'Add model please',
};

export default Car;

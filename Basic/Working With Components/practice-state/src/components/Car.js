import styles from './Car.module.css';

const Car = (props) => {
  return (
    <div className={styles.car}>
      <h3>Name: {props.name}</h3>
      <h4>Mark: {props.mark}</h4>
      <h4>Model: {props.model}</h4>
    </div>
  );
};

export default Car;

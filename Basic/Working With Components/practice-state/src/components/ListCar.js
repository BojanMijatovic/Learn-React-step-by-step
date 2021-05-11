import Car from './Car';
import styles from './ListCar.module.css';

const ListCar = () => {
  return (
    <div className={styles.cars}>
      <Car name='volvo' mark='S5' model='test' />
      <Car name='bmw' mark='R8' model='race car' />
      <Car name='audi' mark='A8' model='limo' />
    </div>
  );
};

export default ListCar;

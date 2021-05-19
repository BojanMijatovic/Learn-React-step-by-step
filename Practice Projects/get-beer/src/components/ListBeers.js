import SingleItem from './SingleItem';
import styles from './style/layout/ListBeers.module.scss';

const ListBeers = () => {
  return (
    <div className={styles.list}>
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
    </div>
  );
};

export default ListBeers;

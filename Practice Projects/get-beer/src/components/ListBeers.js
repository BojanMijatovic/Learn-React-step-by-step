import SingleItem from './SingleItem';
import styles from './style/layout/ListBeers.module.scss';

const ListBeers = ({ results }) => {
  const renderedResults = results.map((result) => {
    return <SingleItem item={result} key={result.id} />;
  });
  return <div className={styles.list}>{renderedResults}</div>;
};

export default ListBeers;

import SingleItem from './SingleItem';
import styles from './style/layout/ListBeers.module.scss';

const ListBeers = ({ results }) => {
  const renderedResults = results.map((result) => {
    return (
      <div>
        <p>{result.name}</p>
        <img src={`${result.image_url}`} alt={result.name} />
      </div>
    );
  });
  return <div className={styles.list}>{renderedResults}</div>;
};

export default ListBeers;

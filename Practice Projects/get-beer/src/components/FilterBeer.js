import styles from './style/layout/FilterBeer.module.scss';

const FilterBeer = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className={styles.filterBeer}>
      <form className={styles.form} onSubmit={(e) => onFormSubmit(e)}>
        <input
          type='text'
          className={styles.input}
          placeholder='find some beer'
          onChange={(e) => onFormSubmit(e)}
        />
        <button type='submit' className={styles.button}>
          find beer
        </button>
      </form>
    </div>
  );
};

export default FilterBeer;

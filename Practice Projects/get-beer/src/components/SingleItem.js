import styles from './style/layout/SingleItem.module.scss';

const SingleItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>
        <h4>Title: New Beer</h4>
        <p>Price : 10$</p>
      </div>
      <div className={styles.image}>
        <img
          src={`https://cdn.pixabay.com/photo/2020/06/15/09/04/red-5300941_960_720.jpg`}
          alt={`New`}
        />
        <p className={styles.descriptionImage}>Some img</p>
      </div>
      <p className={styles.description}>
        <label>Description:</label> Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Cupiditate praesentium consequatur aut nemo totam
        asperiores amet distinctio odio veniam. Ab quas at eum sequi magnam,
        fugiat eligendi qui tempore illum.
      </p>
    </div>
  );
};

export default SingleItem;

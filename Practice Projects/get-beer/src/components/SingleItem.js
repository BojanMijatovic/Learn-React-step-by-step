import React, { useState } from 'react';

import styles from './style/layout/SingleItem.module.scss';

const SingleItem = ({ item }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className={styles.item}>
      <div className={styles.title}>
        <h4>{item.name}</h4>
      </div>
      <div className={styles.image}>
        <img src={`${item.image_url}`} alt={`${item.name}`} />
        <div className={styles.textDescription}>
          <p className={styles.descriptionImage}>
            {item.description} <br />
          </p>
          <p className={styles.tagline}>{item.tagline}</p>
        </div>
      </div>
      {readMore ? (
        <div className={styles.moreInfo}>
          <p className={styles.moreInfoContent}>{item.brewers_tips}</p>
        </div>
      ) : null}
      <button onClick={() => setReadMore(!readMore)} className={styles.btnShow}>
        {`${readMore}` ? 'show more' : ' '``}
      </button>
    </div>
  );
};

export default SingleItem;

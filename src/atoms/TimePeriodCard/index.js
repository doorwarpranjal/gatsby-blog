import React from 'react';

import Spacer from '../Spacer';
import useWindowResize from '../../functions/useWindowResize';

import * as styles from './index.module.css';

const TimePeriodCard = ({name, content}) => {
  const [mobile] = useWindowResize();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.circle} />
        <div className={styles.borderTop} />
        {mobile || <Spacer y={60} />}
        <h3 className={styles.title}>{name}</h3>
        <Spacer y={10} />
        <p className={styles.content}>{content}</p>
      </div>
      {mobile && <Spacer y={50} />}
    </>
  );
};

export default TimePeriodCard;

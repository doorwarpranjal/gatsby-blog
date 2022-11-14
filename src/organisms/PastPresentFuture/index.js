import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import TimePeriodCard from '../../atoms/TimePeriodCard';

import * as styles from './index.module.css';

const PastPresentFuture = () => {
  const data = useStaticQuery(graphql`
    query PastPresentFuture {
      aboutJson {
        ourFuture
        ourPast
        ourPresent
      }
    }
  `);

  const {ourPast, ourPresent, ourFuture} = data.aboutJson;

  const jsonData = [
    {
      name: 'our past',
      content: ourPast,
    },
    {
      name: 'our present',
      content: ourPresent,
    },
    {
      name: 'our future',
      content: ourFuture,
    },
  ];

  return (
    <section className={styles.container}>
      {jsonData.map((time, key) => (
        <TimePeriodCard {...time} key={key} />
      ))}
    </section>
  );
};

export default PastPresentFuture;

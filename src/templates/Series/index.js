import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import useWindowSize from '../../functions/useWindowResize';
import Spacer from '../../atoms/Spacer';
import Title from '../../atoms/Title';
import SeriesCard from '../../molecules/SeriesCard';

import * as styles from './index.module.css';

const Series = () => {
  const seriesList = [
    {
      name: 'Rendezvous',
      image: '/assets/series/rendezvous.png',
      imageName: 'rendezvous',
    },
    {
      name: 'Podcasts',
      image: '/assets/series/podcasts.png',
      imageName: 'podcasts',
    },
    {
      name: 'Stories',
      image: '/assets/series/stories.png',
      imageName: 'stories',
    },
    {
      name: 'Art and the Rant',
      image: '/assets/series/stories.png',
      imageName: 'stories',
    },
  ];

  const [mobile] = useWindowSize();

  const data = useStaticQuery(graphql`
    query SeriesQuery {
      allMarkdownRemark {
        distinct(field: frontmatter___category)
      }
    }
  `);

  const filterForEmpty = (item) =>
    data.allMarkdownRemark.distinct.includes(item.name);

  return (
    <section className={styles.container}>
      <Spacer y={100} />
      <Title text="Series" />
      <Spacer y={mobile ? 50 : 100} />
      <div className={styles.wrapper}>
        {seriesList.filter(filterForEmpty).map((series, key) => (
          <SeriesCard key={key} {...series} />
        ))}
      </div>
      <Spacer y={100} />
    </section>
  );
};

export default Series;

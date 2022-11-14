import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import AboutCard from '../../molecules/AboutCard';

import * as styles from './index.module.css';

const TeamPhotos = () => {
  const data = useStaticQuery(graphql`
    query TeamPhotosQuery {
      aboutJson {
        bios {
          bio
          linkedin
          name
          thumbnail
        }
      }
    }
  `);

  const {bios} = data.aboutJson;

  return (
    <section className={styles.container}>
      {bios.map((bio, key) => (
        <AboutCard {...bio} index={key} key={key} />
      ))}
    </section>
  );
};

export default TeamPhotos;

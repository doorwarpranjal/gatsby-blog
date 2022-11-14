import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import Spacer from '../../atoms/Spacer';
import Title from '../../atoms/Title';
import useWindowResize from '../../functions/useWindowResize';

import * as styles from './index.module.css';
import PastPresentFuture from '../../organisms/PastPresentFuture';

const OurStory = () => {
  const data = useStaticQuery(graphql`
    query OurStoryQuery {
      aboutJson {
        aboutOne
        aboutTwo
      }
    }
  `);

  const [mobile] = useWindowResize();

  const {aboutOne, aboutTwo} = data?.aboutJson;

  return (
    <section className={styles.container}>
      <Spacer y={mobile ? 30 : 100} />
      <Title text="Our Story" />
      <Spacer y={mobile ? 20 : 50} />
      <p className={styles.aboutText}>{aboutOne}</p>
      <Spacer y={10} />
      <p className={styles.aboutText}>{aboutTwo}</p>
      <Spacer y={mobile ? 30 : 100} />
      <PastPresentFuture />
      <Spacer y={mobile ? 30 : 100} />
    </section>
  );
};

export default OurStory;

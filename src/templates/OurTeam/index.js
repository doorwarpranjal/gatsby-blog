import React from 'react';

import Title from '../../atoms/Title';
import Spacer from '../../atoms/Spacer';
import TeamPhotos from '../../organisms/TeamPhotos';
import useWindowResize from '../../functions/useWindowResize';

import * as styles from './index.module.css';

const OurTeam = () => {
  const [mobile] = useWindowResize();
  return (
    <section className={styles.container}>
      <Title text="Our Team" />
      <Spacer y={mobile ? 30 : 100} />
      <TeamPhotos />
      <Spacer y={mobile ? 50 : 100} />
    </section>
  );
};

export default OurTeam;

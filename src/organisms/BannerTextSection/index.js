import React from 'react';

import Spacer from '../../atoms/Spacer';
import useWindowSize from '../../functions/useWindowResize';
import HeroText from '../../molecules/HeroText';
import BannerCarousel from '../BannerCarousel';

import * as styles from './index.module.css';

const BannerTextSection = () => {
  const [mobile] = useWindowSize();
  return (
    <div className={styles.container}>
      <Spacer y={mobile ? 30 : 60} />
      <HeroText />
      {mobile && <Spacer y={50} />}
      {mobile && <BannerCarousel />}
      {mobile && <Spacer y={50} />}
      {mobile || <Spacer y={20} />}
    </div>
  );
};

export default BannerTextSection;

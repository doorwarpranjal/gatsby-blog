import React from 'react';

import useWindowSize from '../../functions/useWindowResize';
import BannerCarousel from '../../organisms/BannerCarousel';
import BannerTextSection from '../../organisms/BannerTextSection';
import Header from '../../organisms/Header';

import * as styles from './index.module.css';

const BannerSection = () => {
  const [mobile] = useWindowSize();

  return (
    <div className={styles.pageContainer}>
      <Header />
      <section className={styles.container}>
        <BannerTextSection />
        {mobile || <BannerCarousel />}
      </section>
    </div>
  );
};

export default BannerSection;

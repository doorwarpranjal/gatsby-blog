import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import {StaticImage} from 'gatsby-plugin-image';

import useWindowSize from '../../functions/useWindowResize';
import Spacer from '../../atoms/Spacer';

import * as styles from './index.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const CAROUSEL_IMAGE_ONE = '../../images/banner/carousel-1.jpg';
const CAROUSEL_IMAGE_TWO = '../../images/banner/carousel-2.jpg';
const CAROUSEL_IMAGE_THREE = '../../images/banner/carousel-3.jpg';
const CAROUSEL_IMAGE_FOUR = '../../images/banner/carousel-4.jpg';

const BannerCarousel = () => {
  const [mobile] = useWindowSize();
  return (
    <div className={styles.container}>
      {mobile || <Spacer y={60} />}
      <Carousel
        autoPlay
        emulateTouch
        infiniteLoop
        showThumbs={false}
        showStatus={false}>
        <StaticImage
          loading="eager"
          className={styles.image}
          src={CAROUSEL_IMAGE_ONE}
          alt="carousel image one"
        />
        <StaticImage
          loading="eager"
          className={styles.image}
          src={CAROUSEL_IMAGE_TWO}
          alt="carousel image two"
        />
        <StaticImage
          loading="eager"
          className={styles.image}
          src={CAROUSEL_IMAGE_THREE}
          alt="carousel image three"
        />
        <StaticImage
          loading="eager"
          className={styles.image}
          src={CAROUSEL_IMAGE_FOUR}
          alt="carousel image four"
        />
      </Carousel>
    </div>
  );
};

export default BannerCarousel;

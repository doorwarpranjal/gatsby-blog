import {StaticImage} from 'gatsby-plugin-image';
import React, {useEffect} from 'react';

import * as styles from './index.module.css';

const UP_ARROW = '../../images/banner/arrow-up.svg';

const ScrollToTop = () => {
  const onClick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  useEffect(() => {
    // Get the button
    const mybutton = document.getElementById('myBtn');
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        mybutton.classList.add(styles.show);
      } else {
        mybutton.classList.remove(styles.show);
      }
    };

    window.addEventListener('scroll', scrollFunction);

    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  return (
    <button className={styles.button} id="myBtn" onClick={onClick}>
      <StaticImage src={UP_ARROW} alt="up arrow" />
    </button>
  );
};

export default ScrollToTop;

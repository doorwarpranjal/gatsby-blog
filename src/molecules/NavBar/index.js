import React from 'react';
import {Link} from 'gatsby';

import Spacer from '../../atoms/Spacer';
import useWindowResize from '../../functions/useWindowResize';

import * as styles from './index.module.css';

const NavBar = () => {
  const [mobile] = useWindowResize();

  return (
    <div className={['flex-row', styles.container].join(' ')}>
      <Link className={styles.link} activeClassName={styles.activeLink} to="/">
        Home
      </Link>
      <Spacer x={mobile ? 20 : 40} />
      <Link
        activeClassName={styles.activeLink}
        className={styles.link}
        to="/articles">
        Articles
      </Link>
      <Spacer x={mobile ? 20 : 40} />
      <Link
        activeClassName={styles.activeLink}
        className={styles.link}
        to="/about">
        About
      </Link>
    </div>
  );
};

export default NavBar;

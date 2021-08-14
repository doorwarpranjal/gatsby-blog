import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

import Spacer from '../../atoms/Spacer';
import NavBar from '../../molecules/NavBar';
import useWindowResize from '../../functions/useWindowResize';
import ScrollToTop from '../../atoms/ScrollToTop';

import * as styles from './index.module.css';

const LOGO = '../../images/banner/logo.svg';
const SEARCH = '../../images/banner/search.svg';

const Header = ({noSearch}) => {
  const [mobile] = useWindowResize();

  return (
    <>
      {mobile || <ScrollToTop />}
      <header className={styles.container}>
        <Link to="/">
          <div className="flex-row-space-between">
            <StaticImage
              loading="eager"
              objectFit="contain"
              className={styles.logo}
              src={LOGO}
              alt="logo"
            />
            <Spacer x={mobile ? 10 : 20} />
            <h2 className={styles.title}>the intersectional feminist</h2>
          </div>
        </Link>
        <div className="flex-row-space-between">
          {mobile || <NavBar />}
          {mobile || <Spacer x={40} />}
          {noSearch || (
            <Link to="/search">
              <StaticImage
                loading="eager"
                objectFit="contain"
                className={styles.searchIcon}
                src={SEARCH}
                alt="search"
              />
            </Link>
          )}
        </div>
      </header>
      {mobile && <NavBar />}
    </>
  );
};

export default Header;

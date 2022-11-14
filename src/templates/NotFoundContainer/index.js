import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import Button from '../../atoms/Button';
import Spacer from '../../atoms/Spacer';
import useWindowSize from '../../functions/useWindowResize';

import * as styles from './index.module.css';

const EMPTY_IMAGE = '../../images/404/404-image.png';

const NotFoundContainer = () => {
  const [mobile] = useWindowSize();

  return (
    <section className={styles.container}>
      <div>
        <Spacer y={mobile ? 30 : 100} />
        <h1 className={styles.title}>
          Oops, this page doesn&#39;t seem to exist
        </h1>
        <Spacer y={mobile ? 20 : 30} />
        <p className={styles.paragraph}>
          Not to worry, let&#39;s get you up and running, by going back to the
          home page.
        </p>
        <Spacer y={mobile ? 20 : 30} />
        <Link to="/">
          <Button text="take me home" />
        </Link>
        {mobile && <Spacer y={50} />}
      </div>
      <aside>
        <Spacer y={mobile ? 50 : 100} />
        <StaticImage objectFit="contain" src={EMPTY_IMAGE} alt="404 image" />
      </aside>
    </section>
  );
};

export default NotFoundContainer;

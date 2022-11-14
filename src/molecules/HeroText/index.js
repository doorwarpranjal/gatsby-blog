import React from 'react';

import Button from '../../atoms/Button';
import Spacer from '../../atoms/Spacer';
import useWindowResize from '../../functions/useWindowResize';

import * as styles from './index.module.css';

const HeroText = () => {
  const [mobile, tablet] = useWindowResize();

  const onClick = () => {
    document
      .getElementById('WhoWeAre')
      ?.scrollIntoView({behavior: 'smooth', block: 'center'});
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        If you see inequality as a “them” problem or “unfortunate other”
        problem, that is a problem
      </h1>
      <Spacer y={mobile ? 10 : tablet ? 15 : 20} />
      <span className={styles.author}>-Kimberlee Crenshaw</span>
      <Spacer y={mobile ? 20 : tablet ? 30 : 40} />
      <p>
        Intersectional feminism offers a lens through which we can better
        understand one another and strive towards a more just future for all. It
        centres the voices of those experiencing overlapping, concurrent forms
        of oppression to understand the depths of the inequalities.
      </p>
      <Spacer y={mobile ? 20 : tablet ? 30 : 50} />

      <Button onClick={onClick} text="read our story" />
    </div>
  );
};

export default HeroText;

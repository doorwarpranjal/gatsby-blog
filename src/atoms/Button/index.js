import React from 'react';

import * as styles from './index.module.css';

const Button = (props) => {
  const {text, onClick = () => {}} = props;

  return (
    <button className={styles.button} onClick={onClick} {...props}>
      {text}
    </button>
  );
};

export default Button;

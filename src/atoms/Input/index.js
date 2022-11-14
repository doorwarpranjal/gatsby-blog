import React, {forwardRef, useImperativeHandle, useState} from 'react';

import * as styles from './index.module.css';

const Input = (props, ref) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useImperativeHandle(
    ref,
    () => ({
      value,
      clear: () => {
        setValue('');
      },
    }),
    [value],
  );

  if (props.textarea) {
    return (
      <textarea
        className={styles.textarea}
        value={value}
        onChange={onChange}
        {...props}
      />
    );
  }

  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default forwardRef(Input);

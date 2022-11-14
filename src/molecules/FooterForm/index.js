import React, {useRef} from 'react';
import Toast from 'light-toast';

import Button from '../../atoms/Button';
import Spacer from '../../atoms/Spacer';
import Input from '../../atoms/Input';
import validate from '../../functions/validate';

import * as styles from './index.module.css';

const FooterForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const clearForm = () => {
    nameRef.current?.clear();
    emailRef.current?.clear();
    messageRef.current?.clear();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputIsValid = validate(
      nameRef.current.value,
      emailRef.current.value,
      messageRef.current.value,
    );
    if (!inputIsValid) {
      Toast.info('Please enter valid data!', 1500);
      return;
    }
    try {
      const myForm = document.getElementById('contactUsFooter');
      const formData = new FormData(myForm);

      await fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'multipart/form-data'},
        body: new URLSearchParams(formData).toString(),
      });
      Toast.info('The form has been successfully submit', 1500, () => {
        clearForm();
      });
    } catch (error) {
      Toast.info('Uh oh! There an issue while trying to submit', 3000, () => {
        clearForm();
      });
    }
  };

  return (
    <>
      <h2 className={styles.title}>Talk to us</h2>
      <Spacer y={20} />
      <form
        name="contact-us-footer"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        netlify="true"
        id="contactUsFooter"
        onSubmit={handleSubmit}
        className={styles.form}>
        <input type="hidden" name="form-name" value="contact-us-footer" />
        <Input ref={nameRef} name="name" placeholder="name" />
        <Spacer y={12} />
        <Input ref={emailRef} name="email" placeholder="email" />
        <Spacer y={12} />
        <Input
          textarea="true"
          ref={messageRef}
          name="message"
          placeholder="your message"
        />
        <Spacer y={32} />
        <Button text="submit" type="submit" />
      </form>
    </>
  );
};

export default FooterForm;

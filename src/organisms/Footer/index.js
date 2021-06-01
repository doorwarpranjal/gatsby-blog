import React from 'react';

import FooterBottomSection from '../../atoms/FooterBottomSection';
import Spacer from '../../atoms/Spacer';
import ContactLinks from '../../molecules/ContactLinks';
import FooterForm from '../../molecules/FooterForm';
import useWindowResize from '../../functions/useWindowResize';

import * as styles from './index.module.css';

const Footer = () => {
  const [mobile] = useWindowResize();

  return (
    <>
      <footer className={styles.container}>
        <h1 className="titleText">Want to collaborate?</h1>
        <Spacer y={40} />
        <section className="flex-row">
          <div className={styles.contactSection}>
            <ContactLinks />
          </div>
          {mobile && <Spacer y={40} />}
          <div className={styles.talkToUs}>
            <FooterForm />
          </div>
        </section>
      </footer>
      <FooterBottomSection />
    </>
  );
};

export default Footer;

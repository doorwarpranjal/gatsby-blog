import React from 'react';

import {graphql, useStaticQuery} from 'gatsby';
import Spacer from '../../atoms/Spacer';
import SocialImageLink from '../../atoms/SocialImageLink';

import * as styles from './index.module.css';

import FACEBOOK_LOGO from '../../images/social/facebook.svg';
import INSTAGRAM_LOGO from '../../images/social/instagram.svg';
import LINKEDIN_LOGO from '../../images/social/linkedin.svg';
import TWITTER_LOGO from '../../images/social/twitter.svg';

const ContactLinks = () => {
  const data = useStaticQuery(graphql`
    query FooterContactQuery {
      site {
        siteMetadata {
          socialLinks {
            linkedIn
            email
            instagram
            facebook
            twitter
          }
        }
      }
    }
  `);

  const {linkedIn, twitter, email, instagram, facebook} =
    data.site.siteMetadata.socialLinks;

  return (
    <div className={styles.container}>
      <h2>Contact</h2>
      <Spacer y={16} />
      <a className={styles.email} href={`mailto:${email}`}>
        theifmag@gmail<span className={styles.hide}>null</span>.com
      </a>
      <Spacer y={40} />
      <h2>Follow</h2>
      <Spacer y={16} />
      <div className={styles.socialIconsContainer}>
        <SocialImageLink
          src={FACEBOOK_LOGO}
          alt="Facebook logo"
          link={facebook}
        />
        <Spacer x={20} />
        <SocialImageLink
          src={INSTAGRAM_LOGO}
          alt="Instagram logo"
          link={instagram}
        />
        <Spacer x={20} />
        <SocialImageLink
          src={LINKEDIN_LOGO}
          alt="Linkedin logo"
          link={linkedIn}
        />
        <Spacer x={20} />
        <SocialImageLink src={TWITTER_LOGO} alt="Twitter logo" link={twitter} />
      </div>
    </div>
  );
};

export default ContactLinks;

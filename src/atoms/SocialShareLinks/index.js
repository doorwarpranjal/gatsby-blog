import React from 'react';
import Toast from 'light-toast';

import Spacer from '../Spacer';
import useWindowResize from '../../functions/useWindowResize';

import * as styles from './index.module.css';

import FACEBOOK_LOGO from '../../images/social/facebook-outline.svg';
import TWITTER_LOGO from '../../images/social/twitter-outline.svg';
import LINKEDIN_LOGO from '../../images/social/linkedin-outline.svg';
import COPYBOARD_LOGO from '../../images/social/copy_to_clipboard.svg';
import TELEGRAM_LOGO from '../../images/social/telegram-outline.svg';

const SocialShareLinks = ({title, url}) => {
  const [mobile] = useWindowResize();

  const onShareToFacebook = () => {
    window.open(`http://www.facebook.com/share.php?u=${url}`);
  };

  const onShareToTwitter = () => {
    window.open(`http://twitter.com/share?text=${title}&url=${url}`);
  };

  const onShareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
  };

  const copyTextToClipboard = () => {
    if (!navigator.clipboard) {
      onCopyToClipboard();
      return;
    }
    navigator.clipboard.writeText(url).then(() => {
      Toast.info('Link has been copied to the clipboard!', mobile ? 10 : 1500);
    });
  };

  const onCopyToClipboard = () => {
    const inputc = document.body.appendChild(document.createElement('input'));
    inputc.value = url;
    inputc.focus();
    inputc.select();
    document.execCommand('copy');
    window.scrollTo({top: 0});
    inputc.parentNode.removeChild(inputc);
    Toast.info('Link has been copied to the clipboard!', mobile ? 10 : 1500);
  };

  const onShareToTelegram = () => {
    window.open(`https://telegram.me/share/url?url=${url}&text=${title}`);
  };

  return (
    <div className={styles.container}>
      <img
        onClick={onShareToFacebook}
        src={FACEBOOK_LOGO}
        alt="facebook logo"
        width={20}
        height={20}
      />
      <Spacer x={mobile ? 10 : 15} />
      <img
        onClick={onShareToTwitter}
        src={TWITTER_LOGO}
        alt="twitter logo"
        width={20}
        height={20}
      />
      <Spacer x={mobile ? 10 : 15} />
      <img
        onClick={onShareToLinkedIn}
        src={LINKEDIN_LOGO}
        alt="linkedin logo"
        width={20}
        height={20}
      />
      <Spacer x={mobile ? 10 : 15} />
      <img
        onClick={onShareToTelegram}
        src={TELEGRAM_LOGO}
        alt="telegram logo"
        width={20}
        height={20}
      />
      <Spacer x={mobile ? 10 : 15} />
      <img
        onClick={copyTextToClipboard}
        src={COPYBOARD_LOGO}
        alt="copy to clipboard"
        width={20}
        height={20}
      />
    </div>
  );
};
export default SocialShareLinks;

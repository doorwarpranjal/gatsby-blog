import React from 'react';

const SocialImageLink = (props) => {
  const {link, src, alt, width, height} = props;

  if (!src) {
    return <></>;
  }
  return (
    <a target="_blank" href={link} rel="noreferrer">
      <img
        src={src}
        alt={alt || 'social link'}
        layout="fixed"
        width={width || 24}
        height={height || 24}
      />
    </a>
  );
};

export default SocialImageLink;

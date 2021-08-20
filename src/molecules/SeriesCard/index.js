import React from 'react';
import {Link} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';

import useImageData from '../../functions/useImageData';

import * as styles from './index.module.css';

const SeriesCard = ({imageName, name}) => {
  const allFile = useImageData();

  const imageData = allFile.find((i) => i.name.includes(imageName))
    ?.childImageSharp?.gatsbyImageData;

  return (
    <Link to="/articles" state={{name}}>
      <div className={styles.container}>
        <GatsbyImage className={styles.image} image={imageData} alt={name} />
        <h2 className={styles.name}>{name}</h2>
      </div>
    </Link>
  );
};

export default SeriesCard;

import {Link} from 'gatsby';
import React from 'react';

import Spacer from '../../atoms/Spacer';

import * as styles from './index.module.css';

const AsideCard = (props) => {
  const {article} = props;

  const {excerpt, frontmatter} = article.node;
  const {title, thumbnail, path} = frontmatter;

  return (
    <div className={styles.container}>
      <Link to={path}>
        <img
          alt={`thumbnail for ${title}`}
          src={thumbnail}
          className={styles.thumbnail}
        />
        <Spacer y={20} />
        <h3 className={styles.title}>{title}</h3>
        <Spacer y={16} />
        <p className={styles.description}>{excerpt}</p>
      </Link>
    </div>
  );
};

export default AsideCard;

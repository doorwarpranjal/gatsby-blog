import React from 'react';
import {Link} from 'gatsby';

import Spacer from '../../atoms/Spacer';

import * as styles from './index.module.css';

const PopularArticle = ({article}) => {
  const {excerpt, frontmatter} = article.node;
  const {title, path} = frontmatter;

  return (
    <article className={styles.container}>
      <Link to={path}>
        <h3 className={styles.title}>{title}</h3>
        <Spacer y={10} />
        <p className={styles.excerpt}>{excerpt}</p>
      </Link>
    </article>
  );
};

export default PopularArticle;

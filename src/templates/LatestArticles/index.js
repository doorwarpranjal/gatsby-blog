import React from 'react';

import Title from '../../atoms/Title';
import Spacer from '../../atoms/Spacer';
import LatestArticleCard from '../../molecules/LatestArticleCard';
import useWindowSize from '../../functions/useWindowResize';

import * as styles from './index.module.css';

const LatestArticlesSection = (props) => {
  const {listOfArticles} = props;

  const [mobile] = useWindowSize();

  const articles = listOfArticles.map((i) => ({
    ...i.node.frontmatter,
    id: i.node.id,
    excerpt: i.node.excerpt,
    timeToRead: i.node.timeToRead,
  }));

  return (
    <section className={styles.container}>
      <Title text="Latest articles" />
      <Spacer y={mobile ? 50 : 100} />
      <div className={styles.articlesContainer}>
        {articles.map((article, key) => (
          <LatestArticleCard index={key} article={article} key={key} />
        ))}
      </div>
      <Spacer y={mobile ? 50 : 100} />
    </section>
  );
};

export default LatestArticlesSection;

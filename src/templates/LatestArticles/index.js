import React from 'react';

import Title from '../../atoms/Title';
import Spacer from '../../atoms/Spacer';
import LatestArticleCard from '../../molecules/LatestArticleCard';
import useWindowSize from '../../functions/useWindowResize';

import * as styles from './index.module.css';

const LatestArticlesSection = (props) => {
  const {listOfArticles, allImageSharp} = props;

  const [mobile] = useWindowSize();

  const articles = listOfArticles.map((i) => ({
    ...i.node.frontmatter,
    id: i.node.id,
    excerpt: i.node.excerpt,
    timeToRead: i.node.timeToRead,
  }));

  const getThumbnail = (thumbnail) => {
    const strippedDownThumbnail = thumbnail.split('assets/')[1];
    const image = allImageSharp.nodes
      .filter((node) => node.fluid.src.includes(strippedDownThumbnail))
      .map((node) => node.gatsbyImageData);
    if (image.length) {
      return image[0];
    }
    return false;
  };

  return (
    <section className={styles.container}>
      <Title text="Latest articles" />
      <Spacer y={mobile ? 50 : 100} />
      <div className={styles.articlesContainer}>
        {articles.map((article, key) => (
          <LatestArticleCard
            getThumbnail={getThumbnail}
            index={key}
            article={article}
            key={key}
          />
        ))}
      </div>
      <Spacer y={mobile ? 50 : 100} />
    </section>
  );
};

export default LatestArticlesSection;

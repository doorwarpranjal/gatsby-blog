import React, {useState} from 'react';
import {Link} from 'gatsby';

import Spacer from '../../atoms/Spacer';
import ArticleCard, {
  Title,
  Excerpt,
  Image,
  Author,
  DateTime,
} from '../../molecules/ArticleCard';
import useWindowSize from '../../functions/useWindowResize';

import DOWN_ARROW from '../../images/articles/down-arrow.svg';
import * as styles from './index.module.css';

const CategoryBlock = ({category, allImageSharp}) => {
  const [categoryTitle, articles] = category;
  const [collapse, setCollapse] = useState(false);
  const [mobile] = useWindowSize();

  const onArrowClick = () => {
    setCollapse(!collapse);
  };

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
    <div id={categoryTitle} className={styles.container}>
      <div className="flex-row-space-between">
        <h3 className={styles.title}>{categoryTitle}</h3>
        <Spacer x={mobile ? 0 : 30} />
        <div className={styles.arrowContainer} onClick={onArrowClick}>
          <img
            src={DOWN_ARROW}
            alt="down arrow"
            className={[styles.arrow, collapse && styles.upArrow].join(' ')}
          />
        </div>
        {mobile || <Spacer x={30} />}
        {mobile || <div className={styles.underline} />}
      </div>
      <Spacer y={mobile ? 30 : 60} />
      {collapse || (
        <>
          <div className={styles.articlesContainer}>
            {articles.map((article, key) => {
              if (mobile) {
                return (
                  <Link to={article.frontmatter.path} key={key}>
                    <article className={styles.articleTag}>
                      <div>
                        <Title title={article.frontmatter.title} />
                        <Spacer y={10} />
                        <Excerpt excerpt={article.excerpt} />
                        <Spacer y={10} />
                        <Author author={article.frontmatter.author} />
                        <Spacer y={1} />
                        <DateTime
                          date={article.frontmatter.date}
                          timeToRead={article.timeToRead}
                        />
                      </div>
                      <Spacer x={20} />
                      <Image
                        thumbnail={article.frontmatter.thumbnail}
                        getThumbnail={getThumbnail}
                        title={article.frontmatter.title}
                      />
                    </article>
                  </Link>
                );
              }
              return (
                <ArticleCard
                  getThumbnail={getThumbnail}
                  noCategory
                  key={key}
                  article={article}
                />
              );
            })}
          </div>
          <Spacer y={mobile ? 30 : 100} />
        </>
      )}
    </div>
  );
};

export default CategoryBlock;

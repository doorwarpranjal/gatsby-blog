import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';

import Spacer from '../../atoms/Spacer';
import Title from '../../atoms/Title';
import useWindowSize from '../../functions/useWindowResize';
import ArticleCard from '../../molecules/ArticleCard';

import * as styles from './index.module.css';

const EditorsChoiceSection = ({allImageSharp}) => {
  const [mobile] = useWindowSize();

  const data = useStaticQuery(graphql`
    query EditorsChoiceQuery {
      allMarkdownRemark(
        limit: 3
        filter: {frontmatter: {EditorChoice: {eq: true}}}
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 100)
            frontmatter {
              title
              path
              category
              author
              thumbnail
              date(formatString: "MMM-YY")
            }
            timeToRead
          }
        }
      }
    }
  `);

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

  const articles = data.allMarkdownRemark.edges.map((i) => i.node);

  return (
    <section className={styles.container}>
      <Spacer y={mobile ? 20 : 50} />
      <Title text="Editor&#39;s Choice" />
      <Spacer y={mobile ? 50 : 100} />
      <div className={styles.articleContainer}>
        {articles.map((article, key) => (
          <ArticleCard
            getThumbnail={getThumbnail}
            article={article}
            key={key}
          />
        ))}
      </div>
      <Spacer y={mobile ? 0 : 100} />
    </section>
  );
};

export default EditorsChoiceSection;

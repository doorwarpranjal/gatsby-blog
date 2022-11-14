import React, {Fragment} from 'react';
import {useStaticQuery, graphql} from 'gatsby';

import * as styles from './index.module.css';
import AsideCard from '../AsideCard';
import Spacer from '../../atoms/Spacer';

const AsideContainer = ({category, path}) => {
  const data = useStaticQuery(graphql`
    query AsideQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              thumbnail
              category
              path
            }
            excerpt(pruneLength: 100)
          }
        }
      }
    }
  `);

  let articlesData = data.allMarkdownRemark.edges.filter(
    (i) =>
      i.node.frontmatter.category === category &&
      i.node.frontmatter.path !== path,
  );
  articlesData = articlesData.slice(0, 1);

  if (!articlesData.length) {
    return <></>;
  }

  return (
    <>
      <aside className={styles.container}>
        <h3 className={styles.title}>You may also like</h3>
        <Spacer y={30} />
        {articlesData.map((article, key) => (
          <Fragment key={key}>
            <AsideCard article={article} />
            <Spacer y={30} />
          </Fragment>
        ))}
      </aside>
      <Spacer y={50} />
    </>
  );
};

export default AsideContainer;

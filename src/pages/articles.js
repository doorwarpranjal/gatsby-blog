import React, {useEffect} from 'react';
import {graphql} from 'gatsby';

import Spacer from '../atoms/Spacer';
import CategoryBlock from '../organisms/CategoryBlock';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import useWindowSize from '../functions/useWindowResize';
import SEO from '../atoms/SEO';

import LOGO from '../images/banner/logo.svg';

const ArticlesPage = (props) => {
  const {data, location} = props;
  const name = location?.state?.name;

  const [mobile] = useWindowSize();

  const {allImageSharp, allMarkdownRemark} = data;
  const {nodes, distinct} = allMarkdownRemark;
  // distinct = array of categories
  // nodes = array of all articles
  const megaArrayOfCategories = distinct.sort().map((category) => {
    const articlesInThisCategory = nodes.filter(
      (article) => article?.frontmatter?.category === category,
    );
    return [category, articlesInThisCategory];
  });

  useEffect(() => {
    if (name) {
      const element = document.getElementById(name);
      setTimeout(() => {
        element?.scrollIntoView();
      }, 10);
    }
  }, [name]);

  return (
    <>
      <SEO
        title="Articles Page: The Intersectional Feminist"
        keywords={[
          'feminism',
          'intersectional feminist',
          'The Intersectional Feminist',
          'intersectional feminism',
          'feminist',
          'magazine',
          'ifmag',
          'equality',
          'equal rights',
          'woman empowerment',
        ]}
        author="The Intersectional Feminist"
        siteUrl="https://www.theifmag.com"
        image={{src: LOGO}}
        description="This is the articles page of the intersectional feminist website. Here you can find the list of all the articles that we have published, neatly categorized!"
      />
      <Header />
      <Spacer y={mobile ? 30 : 80} />
      {megaArrayOfCategories.map((category, key) => (
        <CategoryBlock
          allImageSharp={allImageSharp}
          category={category}
          key={key}
        />
      ))}
      <Footer />
    </>
  );
};

export default ArticlesPage;

export const PageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        timeToRead
        frontmatter {
          title
          category
          thumbnail
          author
          date(formatString: "MMM-YY")
          path
        }
        excerpt(format: PLAIN, truncate: true, pruneLength: 100)
      }
      distinct(field: frontmatter___category)
    }
    allImageSharp {
      nodes {
        gatsbyImageData
        fluid {
          src
        }
      }
    }
  }
`;

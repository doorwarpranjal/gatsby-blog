import React from 'react';
import {graphql} from 'gatsby';

import BannerSection from '../templates/BannerSection';
import EditorsChoiceSection from '../organisms/EditorsChoice';
import WhoWeAre from '../templates/WhoWeAre';
import LatestArticlesSection from '../templates/LatestArticles';
import Series from '../templates/Series';
import Footer from '../organisms/Footer';
import SEO from '../atoms/SEO';

import LOGO from '../images/banner/logo.svg';
import '../styles/index.css';

const HomePage = (props) => {
  const {aboutJson, allMarkdownRemark, allImageSharp} = props.data;

  const {aboutOne} = aboutJson;
  const {edges} = allMarkdownRemark;

  return (
    <>
      <SEO
        title="The homepage of the The Intersectional Feminist magazine."
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
          'what is intersectional feminist',
        ]}
        author="The Intersectional Feminist"
        siteUrl="https://www.theifmag.com"
        image={{src: LOGO}}
        description={aboutOne}
      />
      <BannerSection />
      <EditorsChoiceSection allImageSharp={allImageSharp} />
      <WhoWeAre />
      <Series />
      <LatestArticlesSection
        allImageSharp={allImageSharp}
        listOfArticles={edges}
      />
      <Footer />
    </>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query {
    aboutJson {
      aboutOne
    }
    allMarkdownRemark(
      limit: 7
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            title
            path
            category
            author
            date(formatString: "MMM-yy")
            thumbnail
          }
          timeToRead
        }
      }
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

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

const HomePage = ({data}) => {
  const {aboutOne} = data?.aboutJson;

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
      <EditorsChoiceSection />
      <WhoWeAre />
      <Series />
      <LatestArticlesSection />
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
  }
`;

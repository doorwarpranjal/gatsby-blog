import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import BannerSection from '../templates/BannerSection';
import EditorsChoiceSection from '../organisms/EditorsChoice';
import WhoWeAre from '../templates/WhoWeAre';
import LatestArticlesSection from '../templates/LatestArticles';
import Series from '../templates/Series';
import Footer from '../organisms/Footer';
import SEO from '../atoms/SEO';

import LOGO from '../images/banner/logo.svg';
import '../styles/index.css';

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      aboutJson {
        aboutOne
        aboutTwo
      }
    }
  `);

  const {aboutOne, aboutTwo} = data?.aboutJson;

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
        ]}
        author="The Intersectional Feminist"
        siteUrl="https://www.theifmag.com"
        image={{src: LOGO}}
        description={aboutOne.concat(aboutTwo)}
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

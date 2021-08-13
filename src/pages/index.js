import React from 'react';

import BannerSection from '../templates/BannerSection';
import EditorsChoiceSection from '../organisms/EditorsChoice';
import WhoWeAre from '../templates/WhoWeAre';
import LatestArticlesSection from '../templates/LatestArticles';
import Series from '../templates/Series';
import Footer from '../organisms/Footer';
import SEO from '../atoms/SEO';

import LOGO from '../images/banner/logo.svg';
import '../styles/index.css';

const HomePage = () => (
  <>
    <SEO
      title="The Intersectional Feminist"
      keywords={[
        'feminism',
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
      description="The home page of the Intersectional feminist magazine or ifmag."
    />
    <BannerSection />
    <EditorsChoiceSection />
    <WhoWeAre />
    <Series />
    <LatestArticlesSection />
    <Footer />
  </>
);

export default HomePage;

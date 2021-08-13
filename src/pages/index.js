import React from 'react';

import BannerSection from '../templates/BannerSection';
import EditorsChoiceSection from '../organisms/EditorsChoice';
import WhoWeAre from '../templates/WhoWeAre';
import LatestArticlesSection from '../templates/LatestArticles';
import Series from '../templates/Series';
import Footer from '../organisms/Footer';

import '../styles/index.css';
import SEO from '../atoms/SEO';

const HomePage = () => (
  <>
    <SEO
      title="The Intersectional Feminist"
      keywords={['feminism, intersectional']}
      author="The Intersectional Feminist"
      siteUrl="https://www.theifmag.com"
      // image={{src: siteUrl + thumbnail}}
      // description={excerpt}
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

import React from 'react';
import Helmet from 'react-helmet';

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
    <Helmet>
      <title>The Intersectional Feminist</title>
      <meta
        name="description"
        content="The If Mag The Best Blogs on every topic"
      />
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://www.theifmag.com",
          "name": "The Intersectional Feminist",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "theifmag@gmail.com",
            "contactType": "The Team"
          }
        }
      `}
      </script>
      <SEO
        title="The Intersectional Feminist"
        keywords={['feminism, intersectional']}
        author="The Intersectional Feminist"
        siteUrl="https://www.theifmag.com"
        // image={{src: siteUrl + thumbnail}}
        // description={excerpt}
      />
    </Helmet>
    <BannerSection />
    <EditorsChoiceSection />
    <WhoWeAre />
    <Series />
    <LatestArticlesSection />
    <Footer />
  </>
);

export default HomePage;

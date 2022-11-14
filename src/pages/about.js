import React from 'react';
import Helmet from 'react-helmet';

import Header from '../organisms/Header';
import OurStory from '../templates/OurStory';
import OurTeam from '../templates/OurTeam';
import Footer from '../organisms/Footer';

export default function About() {
  return (
    <section>
      <Helmet>
        <title>About - The Intersectional Feminist</title>
        <meta name="description" content="About us page of the IF mag" />
      </Helmet>
      <Header />
      <OurStory />
      <OurTeam />
      <Footer />
    </section>
  );
}

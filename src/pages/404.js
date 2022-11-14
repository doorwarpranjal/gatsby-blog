import React from 'react';
import Helmet from 'react-helmet';

import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import NotFoundContainer from '../templates/NotFoundContainer';

const notFound = () => (
  <>
    <Helmet>
      <title>The Intersectional Feminist: 404</title>
    </Helmet>
    <Header />
    <NotFoundContainer />
    <Footer />
  </>
);

export default notFound;

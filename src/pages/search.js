import React from 'react';

import Header from '../organisms/Header';
import Search from '../organisms/Search';
import SEO from '../atoms/SEO';

import LOGO from '../images/banner/logo.svg';

const SearchPage = () => (
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
      description="This is the search page of the intersectional feminist website. Here you can search for any of the articles that we have published"
    />
    <Header noSearch />
    <Search />
  </>
);

export default SearchPage;

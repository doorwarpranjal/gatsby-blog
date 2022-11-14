/* eslint-disable indent */
import React from 'react';
import {Helmet} from 'react-helmet';

function SEO({
  description = '',
  lang = 'en',
  image: metaImage = {},
  title = '',
  keywords = [],
  pathname = '',
  author = '',
  siteUrl = '',
  date = new Date().toDateString(),
}) {
  const image = metaImage && metaImage.src ? metaImage.src : null;
  const canonical = pathname ? `${siteUrl}${pathname}` : null;

  const internalKeywords = [
    'feminism',
    'What is intersectional feminism',
    'intersectionality',
    'ifmag',
    'The Intersectional Feminist',
    'Magazine for women',
    'LGBT',
    'women empowerment',
    'equality',
    'equal rights',
  ];

  const keywordsObject = keywords.concat(internalKeywords);

  const ldJsonObject = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    headline: title,
    image: [image],
    datePublished: date,
    author: {
      '@type': 'Person',
      name: author,
      url: `${siteUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Intersectional Feminist',
    },
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : [
              {
                rel: 'canonical',
                href: siteUrl,
              },
            ]
      }
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: keywordsObject.join(','),
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          property: 'og:image:width',
          content: metaImage?.width,
        },
        {
          property: 'og:image:height',
          content: metaImage?.height,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ]}>
      <script type="application/ld+json">{JSON.stringify(ldJsonObject)}</script>
    </Helmet>
  );
}

export default SEO;

/* eslint-disable indent */
import React from 'react';
import {Helmet} from 'react-helmet';

function SEO({
  description,
  lang,
  image: metaImage,
  title,
  keywords,
  pathname,
  author,
  siteUrl,
  date,
}) {
  const image = metaImage && metaImage.src ? metaImage.src : null;
  const canonical = pathname ? `${siteUrl}${pathname}` : null;

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
          : []
      }
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: keywords.join(','),
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
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": ${canonical}
          },
          "headline": ${title},
          "image": [
            ${image}
          ],
          "datePublished": ${date},
          "author": {
            "@type": "Person",
            "name": ${author},
            "url": ${`${siteUrl}/about`}
          },
          "publisher": {
            "@type": "Organization",
            "name": "The Intersectional Feminist",
          }
          }
        `}
      </script>
    </Helmet>
  );
}

export default SEO;

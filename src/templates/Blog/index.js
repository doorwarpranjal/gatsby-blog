/* eslint-disable react/no-danger */
import React, {useEffect} from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';

import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import Title from '../../atoms/Title';
import Spacer from '../../atoms/Spacer';
import useWindowResize from '../../functions/useWindowResize';
import AsideContainer from '../../molecules/AsideContainer';

import * as styles from './index.module.css';
import SEO from '../../atoms/SEO';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const {site, markdownRemark} = data; // data.markdownRemark holds your post data
  const {siteMetadata} = site;
  const {frontmatter, timeToRead, excerpt, html} = markdownRemark;
  const {thumbnail, path, metaDescription, title, category, date, author} =
    frontmatter;

  const [mobile] = useWindowResize();

  useEffect(() => {
    const anchors = document.getElementById(path).getElementsByTagName('a');
    [...anchors].forEach((anchor) => {
      anchor.setAttribute('target', '_blank');
    });
  }, [path]);

  return (
    <>
      <Helmet>
        <title>
          {title} | {siteMetadata.title}
        </title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <SEO
        title={title}
        keywords={[category]}
        author={author}
        siteUrl={path}
        image={thumbnail}
        description={excerpt}
      />

      <Header />

      <div className={styles.container}>
        <article id={path}>
          <Spacer y={mobile ? 20 : 50} />
          <Title removeThatLineBro text={title} />
          <Spacer y={mobile ? 20 : 50} />
          <div>
            <h5 className={styles.authorName}>{author}</h5>
            <h5 className={styles.articleDate}>
              {`${date} | ${timeToRead} mins`}
            </h5>
          </div>
          <Spacer y={mobile ? 20 : 50} />
          <img
            className={styles.thumbnailImage}
            src={thumbnail}
            alt="thumbnail"
          />
          <Spacer y={mobile ? 30 : 50} />
          <div style={{display: 'flex'}}>
            <div
              className={styles.blogContent}
              dangerouslySetInnerHTML={{__html: html}}
            />
            <AsideContainer path={path} category={category} />
          </div>
          <Spacer y={mobile ? 80 : 150} />
        </article>
      </div>
      <Footer />
    </>
  );
}

export const pageQuery = graphql`
  query ($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
        author
        category
      }
      timeToRead
      excerpt
    }
  }
`;

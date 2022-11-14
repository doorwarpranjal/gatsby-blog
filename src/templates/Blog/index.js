/* eslint-disable react/no-danger */
import React, {useEffect} from 'react';
import {graphql} from 'gatsby';

import {GatsbyImage} from 'gatsby-plugin-image';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import SEO from '../../atoms/SEO';
import Title from '../../atoms/Title';
import Spacer from '../../atoms/Spacer';
import useWindowResize from '../../functions/useWindowResize';
import AsideContainer from '../../molecules/AsideContainer';
import SocialShareLinks from '../../atoms/SocialShareLinks';

import * as styles from './index.module.css';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const {markdownRemark, imageSharp, site} = data; // data.markdownRemark holds your post data
  const {frontmatter, timeToRead, excerpt, html} = markdownRemark;
  const {thumbnail, path, title, category, date, author} = frontmatter;
  const {siteUrl} = site.siteMetadata;

  const [mobile] = useWindowResize();

  useEffect(() => {
    const anchors = document.getElementById(path).getElementsByTagName('a');
    [...anchors].forEach((anchor) => {
      anchor.setAttribute('target', '_blank');
    });
  }, [path]);

  const keywordsFromTitle = title.split(' ');
  const keywordsFromDesc = excerpt.split(' ');
  const keywords = keywordsFromTitle.concat(keywordsFromDesc);

  return (
    <>
      <SEO
        title={title}
        keywords={keywords}
        author={author}
        siteUrl={siteUrl + path}
        image={{src: siteUrl + thumbnail}}
        description={excerpt}
        date={date}
      />

      <Header />

      <div className={styles.container}>
        <article id={path}>
          <Spacer y={mobile ? 20 : 50} />
          <Title removeThatLineBro text={title} />
          <Spacer y={mobile ? 20 : 50} />
          <div className={styles.authorAndSocialContainer}>
            <div>
              <h5 className={styles.authorName}>{author}</h5>
              <h5 className={styles.articleDate}>
                {`${date} | ${timeToRead} mins`}
              </h5>
            </div>
            <Spacer x={mobile || 50} y={mobile && 20} />
            <SocialShareLinks title={title} url={siteUrl + path} />
          </div>
          <Spacer y={mobile ? 20 : 50} />
          {imageSharp ? (
            <GatsbyImage
              className={styles.thumbnailImage}
              image={imageSharp.gatsbyImageData}
              alt={`thumbnail for ${title}`}
            />
          ) : (
            <img
              className={styles.thumbnailImage}
              src={thumbnail}
              alt={`thumbnail for ${title}`}
            />
          )}
          <Spacer y={mobile ? 30 : 50} />
          <div style={{display: 'flex'}}>
            <div
              className={styles.blogContent}
              dangerouslySetInnerHTML={{__html: html}}
            />
            <AsideContainer path={path} category={category} />
          </div>
          <Spacer y={mobile ? 20 : 50} />
          <SocialShareLinks title={title} url={siteUrl + path} />
          <Spacer y={mobile ? 50 : 100} />
        </article>
      </div>
      <Footer />
    </>
  );
}

export const pageQuery = graphql`
  query ($path: String!, $thumbnail: String!) {
    site {
      siteMetadata {
        siteUrl
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
    imageSharp(fluid: {src: {regex: $thumbnail}}) {
      gatsbyImageData
    }
  }
`;

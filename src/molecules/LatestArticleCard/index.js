import React from 'react';
import {Link} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';

import Spacer from '../../atoms/Spacer';
import useWindowResize from '../../functions/useWindowResize';
import useImageData from '../../functions/useImageData';

import * as styles from './index.module.css';

const Category = ({category}) => (
  <Link to="/articles" state={{name: category}}>
    <span className={styles.category}>{category}</span>
  </Link>
);

const Excerpt = ({excerpt}) => <p className={styles.excerpt}>{excerpt}</p>;

const Author = ({author}) => (
  <span className={styles.author}>{`By ${author}`}</span>
);

const Date = ({date}) => <span className={styles.author}>{date}</span>;

const SmallCard = ({
  image,
  thumbnail,
  category,
  title,
  excerpt,
  author,
  date,
  timeToRead,
  path,
}) => (
  <article className={styles.smallContainer}>
    <Link to={path}>
      {image ? (
        <GatsbyImage
          image={image}
          alt={`thumbnail for ${title}`}
          className={styles.smallThumbnail}
        />
      ) : (
        <img
          src={thumbnail}
          className={styles.smallThumbnail}
          alt={`thumbnail for ${title}`}
        />
      )}
      <Spacer x={30} />
      <div className={styles.smallTextBox}>
        <Category category={category} />
        <Spacer y={10} />
        <h2 className={styles.smallTitle}>{title}</h2>
        <Spacer y={16} />
        <Excerpt excerpt={excerpt} />
        <Spacer y={16} />
        <Author author={author} />
        <Spacer y={5} />
        <Date date={`${date} | ${timeToRead} mins`} />
      </div>
    </Link>
  </article>
);

const LargeCard = ({
  image,
  thumbnail,
  category,
  title,
  excerpt,
  author,
  date,
  timeToRead,
  path,
  mobile,
}) => (
  <article className={styles.largeContainer}>
    <Link to={path}>
      {image ? (
        <GatsbyImage
          className={styles.largeThumbnail}
          image={image}
          alt="thumbnail"
        />
      ) : (
        <img
          src={thumbnail}
          className={styles.largeThumbnail}
          alt="thumbnail"
        />
      )}
      <Spacer y={mobile ? 10 : 20} />
      <Category category={category} />
      <Spacer y={mobile ? 5 : 10} />
      <h2 className={styles.largeTitle}>{title}</h2>
      <Spacer y={20} />
      <Excerpt excerpt={excerpt} />
      <Spacer y={20} />
      <Author author={author} />
      <Spacer y={5} />
      <Date date={`${date} | ${timeToRead} mins`} />
    </Link>
  </article>
);

const LatestArticleCard = ({article, index}) => {
  const [mobile] = useWindowResize();
  const allFile = useImageData();

  const image = allFile.find((i) => article.thumbnail.includes(i.name))
    ?.childImageSharp?.gatsbyImageData;

  if (mobile || index < 2) {
    return <LargeCard mobile={mobile} {...article} image={image} />;
  }

  return <SmallCard {...article} image={image} />;
};

export default LatestArticleCard;

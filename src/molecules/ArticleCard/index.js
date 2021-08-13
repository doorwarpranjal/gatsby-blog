import React from 'react';
import {Link} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';

import Spacer from '../../atoms/Spacer';
import useWindowResize from '../../functions/useWindowResize';
import useImageData from '../../functions/useImageData';

import * as styles from './index.module.css';

export const Image = ({thumbnail, title}) => {
  const allFile = useImageData();

  const image = allFile.find((i) => thumbnail.includes(i.name))?.childImageSharp
    ?.gatsbyImageData;
  return image ? (
    <GatsbyImage
      alt={`article thumbnail for ${title}`}
      objectFit="cover"
      image={image}
      className={styles.thumbnail}
    />
  ) : (
    <img
      src={thumbnail}
      className={styles.thumbnail}
      alt={`article thumbnail for ${title}`}
    />
  );
};

export const Category = ({category}) => (
  <Link to="/articles" state={{name: category}}>
    <span className={styles.category}>{category}</span>
  </Link>
);

export const Title = ({title}) => <h2 className={styles.title}>{title}</h2>;

export const Excerpt = ({excerpt}) => (
  <p className={styles.excerpt}>{excerpt}</p>
);

export const Author = ({author}) => (
  <span className={styles.author}>{`By ${author}`}</span>
);

export const DateTime = ({date, timeToRead}) => (
  <>
    <span className={styles.author}>{date}</span>
    <span className={styles.author}>{` | ${timeToRead} mins`}</span>
  </>
);

const ArticleCard = (props) => {
  const {article, noCategory} = props;
  const {timeToRead, excerpt, frontmatter} = article;
  const {title, category, thumbnail, author, date, path} = frontmatter;

  const [mobile] = useWindowResize();

  return (
    <div className={styles.container}>
      <Link to={path}>
        <Image thumbnail={thumbnail} title={title} />
        {noCategory || (
          <>
            <Spacer y={mobile ? 10 : 20} />
            <Category category={category} />
          </>
        )}
        <Spacer y={mobile ? 5 : 16} />
        <Title title={title} />
        <Spacer y={10} />
        <Excerpt excerpt={excerpt} />
        <Spacer y={16} />
        <Author author={author} />
        <Spacer y={2} />
        <DateTime date={date} timeToRead={timeToRead} />
        {mobile && <Spacer y={50} />}
      </Link>
    </div>
  );
};

export default ArticleCard;

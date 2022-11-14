import {graphql, useStaticQuery} from 'gatsby';

const useImageData = () => {
  const data = useStaticQuery(graphql`
    query UseImageDataQuery {
      allFile(filter: {sourceInstanceName: {eq: "markdown-images"}}) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(quality: 100, width: 350, placeholder: BLURRED)
            }
            name
          }
        }
      }
    }
  `);

  const allFile = data.allFile.edges.map((i) => i.node);

  return allFile;
};

export default useImageData;

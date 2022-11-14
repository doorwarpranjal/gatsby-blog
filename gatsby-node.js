const path = require(`path`);

exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions;

  const blogPostTemplate = path.resolve(`src/templates/Blog/index.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]}
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              thumbnail
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    const thumbnailImage = node.frontmatter.thumbnail.split('assets/')[1];
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        thumbnail: '/' + thumbnailImage + '/g',
      }, // additional data can be passed via context
    });
  });
};

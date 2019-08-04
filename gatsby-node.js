/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules

const path = require('path');
const { createFilePath } = require("gatsby-source-filesystem")


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
          {
            test: /animejs/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@assets': path.resolve(__dirname, 'src/assets')
        // '@config': path.resolve(__dirname, 'src/config'),
        // '@content': path.resolve(__dirname, 'src/content'),
        // '@fonts': path.resolve(__dirname, 'src/fonts'),
        // '@images': path.resolve(__dirname, 'src/images'),
        // '@pages': path.resolve(__dirname, 'src/pages'),
        // '@styles': path.resolve(__dirname, 'src/styles'),
        // '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};

exports.onCreateNode = ({node, getNode, actions}) => {
    const { createNodeField } = actions
    // console.log(node.internal.type)
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions
    return graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/project-template.js`),
                context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
                },
            })
        })
    })
  }
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPage = async ({graphql, actions}) => {
//     const {createPage} = actions
// }


//generate slugs for markdown pages
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
  
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode })
  
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  
  }

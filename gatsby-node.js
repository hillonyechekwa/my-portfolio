const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({graphql, actions, reporter}) => {
    const {createPage} = actions
    const component = path.resolve(`src/templates/project.js`)

    const result = await graphql(`
      {
        allMarkdownRemark (limit: 1000){
          edges{
            node{
              id
              fields{
                slug
              }
            }
          }
        }
      }
    `)
    
    console.log(result)
    if(result.errors){
      reporter.panicOnBuild('Error while running graphql query.')
      return
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component,
        context: {
          slug: node.fields.slug
        }
      })
    })
} 



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

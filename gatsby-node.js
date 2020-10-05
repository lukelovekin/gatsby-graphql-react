const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions

    // runs everytime server is started

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        // adds a field in the graphql data called slug with the value of the slug
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }

}

module.exports.createPages = async ({graphql,  actions}) => {
    // get path to template
    // get markdown data  
    // create new pages
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(
        //returns a promise
        `
        query {
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
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}
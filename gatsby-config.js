module.exports = {
  siteMetadata: {
    title: 'Full-Stack Gatsby Demo',
    author: 'Luke Lovekin'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}

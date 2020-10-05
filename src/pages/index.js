import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/layout'


const IndexPage = () => {
  const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
  return(
    <Layout>
      <h1>Hello</h1>
      <h2>Im {data.site.siteMetadata.author}, Im a develoepr from brisbane</h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default IndexPage
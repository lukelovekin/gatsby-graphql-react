import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'


export default function BlogPage() {
    const data = useStaticQuery(graphql`
        query {
          allMarkdownRemark {
            edges {
              node {
                frontmatter{
                  title
                  date
                }
                fields {
                  slug
                }
              }
            }
          }
        }
    `)

    console.log(data)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map(blog => {
                    return (
                        <li>
                            <Link to={`/blog/${blog.node.fields.slug}`}><h2>{blog.node.frontmatter.title}</h2>
                            <p>{blog.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

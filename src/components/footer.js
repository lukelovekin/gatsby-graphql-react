import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default function Footer() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <footer>
            <p>
                Created by {data.site.siteMetadata.author}
            </p>
        </footer>
    )
}

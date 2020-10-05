import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import headerStyles from './header.module.scss'

export default function Header() {
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
        <header className={headerStyles.header}>
            <h1>
                    {data.site.siteMetadata.title}
            </h1>
            <nav >
                <ul className={headerStyles.navList} activeClassName={headerStyles.activeNavItem}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link></li>
                    <li><Link to='/about' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link></li>
                    <li><Link to='/contact' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Conact</Link></li>
                    <li><Link to='/blog' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

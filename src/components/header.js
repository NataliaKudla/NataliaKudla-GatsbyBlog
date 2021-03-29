import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
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
      <h1 className={headerStyles.headerContainer}>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.nav_list}>
          <li className={headerStyles.nav_item}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.active_link}
              to="/"
            >
              {" "}
              Home
            </Link>
          </li>
          <li className={headerStyles.nav_item}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.active_link}
              to="/about"
            >
              {" "}
              About Me
            </Link>
          </li>
          <li className={headerStyles.nav_item}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.active_link}
              to="/blog"
            >
              {" "}
              Blog
            </Link>
          </li>
          <li className={headerStyles.nav_item}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.active_link}
              to="/contact"
            >
              {" "}
              Contact me!
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

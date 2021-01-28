import React from "react"
import { Link } from "gatsby"
import "./header.module.scss"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          Modern Web Development with Natalia
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.nav_list}>
          <li className={headerStyles.nav_item}>
            <Link className={headerStyles.link} to="/">
              {" "}
              Home
            </Link>
          </li>
          <li className={headerStyles.nav_item}>
            <Link className={headerStyles.link} to="/about">
              {" "}
              About Me
            </Link>
          </li>
          <li className={headerStyles.nav_item}>
            <Link className={headerStyles.link} to="/blog">
              {" "}
              Blog
            </Link>
          </li>
          <li className={headerStyles.nav_item}>
            <Link className={headerStyles.link} to="/contact">
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

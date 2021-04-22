import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>bio</p>
      <p>
        My{" "}
        <Link to="https://github.com/NataliaKudla" target="_blank">
          GitHub Repo
        </Link>
      </p>
      <p>
        To get in touch with me check out my contact page?{" "}
        <Link to="/contact">Contact me!</Link>
      </p>
    </Layout>
  )
}

export default AboutPage

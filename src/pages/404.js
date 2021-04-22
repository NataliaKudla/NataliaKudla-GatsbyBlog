import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="Page not found" />
      <h1>Oooop, page not found</h1>
      <p>
        <Link to="/">Take me Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound

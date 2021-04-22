import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title={"Contact"} />
      <h1>Contact me</h1>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/natalia-kud%C5%82a-03b91082/">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/NataliaKudla">GitHub</a>
        </li>
      </ul>
    </Layout>
  )
}

export default ContactPage

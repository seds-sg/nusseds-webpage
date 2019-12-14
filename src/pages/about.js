import React from "react"
import { Link } from "gatsby"

import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <NavbarPaddingContainer>
      <SEO title="Page two" />
      <h1>Hi from the about page</h1>
      <p>Welcome to the about page</p>
      <Link to="/">Go back to the homepage</Link>
    </NavbarPaddingContainer>
  </Layout>
)

export default AboutPage

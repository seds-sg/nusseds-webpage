import React from "react"
import { Link } from "gatsby"

import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <NavbarPaddingContainer>
      <SEO title="Contact Page" />
      <h1>Contact Page</h1>
      <p>Welcome to contact page</p>
      <Link to="/">Go back to the homepage</Link>
    </NavbarPaddingContainer>
  </Layout>
)

export default ContactPage

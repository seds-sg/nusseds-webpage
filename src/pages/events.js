import React from "react"
import { Link } from "gatsby"

import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"

const EventsPage = () => (
  <Layout>
    <NavbarPaddingContainer>
      <SEO title="Page two" />
      <h1>Hi from the events page</h1>
      <p>Welcome to the events page</p>
      <Link to="/">Go back to the homepage</Link>
    </NavbarPaddingContainer>
  </Layout>
)

export default EventsPage

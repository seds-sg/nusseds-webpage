import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EventsPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the events page</h1>
    <p>Welcome to the events page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default EventsPage

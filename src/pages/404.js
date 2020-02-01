import React from "react"
import { PageHeaderFont, DescriptionFont } from "../components/textStyles"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const NotFoundPage = () => (
  <Layout>
    <NavbarPaddingContainer>
      <SEO title="404: Not found" />
      <NotFoundPageHeaderWrapper>NOT FOUND</NotFoundPageHeaderWrapper>
      <NotFoundPageDescription>
        You just hit a route that doesn&#39;t exist... the sadness.
      </NotFoundPageDescription>
    </NavbarPaddingContainer>
  </Layout>
)

const NotFoundPageHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`

const NotFoundPageDescription = styled(DescriptionFont)`
  padding-bottom: 4.5rem;
`

export default NotFoundPage

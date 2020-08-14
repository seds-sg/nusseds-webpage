import React from "react"
import { PageHeaderFont, DescriptionFont } from "../components/textStyles"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const ResourcesPage = () => {

  return (
    <Layout>
      <NavbarPaddingContainer>
        <SEO title="Resources" />
        <ResourcesPageHeaderWrapper>Resources</ResourcesPageHeaderWrapper>
        <ResourcesPageDescription>
          Our curated list of resources, just for you.
        </ResourcesPageDescription>
        <DescriptionFont>
          <ul>
            <li><a href="/sponsorkit.pdf">Sponsorship kit</a></li>
            <li><a href="/NUS_SEDS.pdf">An introductory presentation</a></li>
          </ul>
        </DescriptionFont>
      </NavbarPaddingContainer>
    </Layout>
  )
}



const ResourcesPageHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`

const ResourcesPageDescription = styled(DescriptionFont)`
  padding-bottom: 4.5rem;
`

export default ResourcesPage
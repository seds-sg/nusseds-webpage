import React from "react"
import { StyledBriefPostLink } from "../components/post-link"
import { PageHeaderFont, DescriptionFont } from "../components/textStyles"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { graphql } from "gatsby"
import StyledButton from "../components/button"
import SectionHeaderWrapper from "../components/sectionHeader"
import { useState } from "react"
import axios from "axios"

const EventsPage = ({ data: { pastEvents, newEvents } }) => {
  const [showGetUpdateBtn, setGetUpdateBtn] = useState(true)
  const OldPosts = pastEvents.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <StyledBriefPostLink key={edge.node.id} post={edge.node} />)
  const NewPosts = newEvents.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <StyledBriefPostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <NavbarPaddingContainer>
        <SEO title="Events" />
        <EventPageHeaderWrapper>Our Events.</EventPageHeaderWrapper>
        <EventPageDescription>
          Get event updates and post-event summaries every week! Just leave your
          email with us and we will take care of it for you!
        </EventPageDescription>
        {showGetUpdateBtn ? (
          <ButtonWrapper
            buttonText="Get Updates 🚀"
            onClick={() => setGetUpdateBtn(false)}
          />
        ) : (
          <>
            <StyledInput
              type="text"
              autoFocus
              placeholder="Enter your email address!"
            />
            <ButtonWrapper
              buttonText="Submit!"
              onClick={async () => {
                const response = await axios.post(
                  "https://maker.ifttt.com/trigger/email_sent/with/key/dHuqFr9kznrIlXrL5b35Vg",
                  { value1: "test7@gmail.com" },
                  { headers: { "Content-Type": "application/json" } }
                )
                // const response = await fetch('https://maker.ifttt.com/trigger/email_sent/with/key/dHuqFr9kznrIlXrL5b35Vg', {
                // 	method: 'POST',
                // 	headers: { 'Content-Type': 'application/json' },
                // 	body: JSON.stringify({ "value1": '' }),
                // })
                console.log(response)
                setGetUpdateBtn(true)
              }}
            />
          </>
        )}
        <SectionHeaderWrapper headerText="UPCOMING EVENTS" />
        <EventsWrapper>{NewPosts}</EventsWrapper>
        <SectionHeaderWrapper headerText="PAST EVENTS" />
        <EventsWrapper>{OldPosts}</EventsWrapper>
        {/* <SectionHeaderWrapper headerText="OUR PAST SPEAKERS" /> */}
      </NavbarPaddingContainer>
    </Layout>
  )
}

const EventsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const EventPageHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`

const EventPageDescription = styled(DescriptionFont)`
  padding-bottom: 4.5rem;
`
const ButtonWrapper = styled(StyledButton)`
  margin-bottom: 5rem;
  padding: 0.75rem 2rem;
`

const StyledInput = styled.input`
  height: 44px;
  padding: 12px 32px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
`

export default EventsPage

export const pageQuery = graphql`
  query {
    pastEvents: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { upcoming: { eq: null } } }
      limit: 4
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
    newEvents: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { upcoming: { ne: null } } }
      limit: 4
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

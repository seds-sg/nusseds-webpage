import styled from "styled-components"
import { PageHeaderFont, DescriptionFont } from "../components/textStyles"

export const BlogPostWrapper = styled.div`color: white;`

export const BlogPostContentWrapper = styled(DescriptionFont)`
  margin-top: 3rem;
  h2 {
    padding-bottom: 1rem;
    padding-top: 1.5rem;
  }
  p {
    padding-bottom: 2rem;
    margin-bottom: 0;
  }
`

export const PostHeaderFont = styled(PageHeaderFont)`
  padding-bottom: 3rem;
`

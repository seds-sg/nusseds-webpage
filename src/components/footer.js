import React from "react"
import { DescriptionFont } from "./textStyles"
import styled from "styled-components"

const Footer = () => (
  <FooterContainer>
    <FooterFont></FooterFont>
    <FooterFont>© NUS SEDS 2020. Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
        </FooterFont>
  </FooterContainer>
)

const FooterContainer = styled.footer`
  padding: 2rem;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
`

const FooterFont = styled(DescriptionFont)`
  font-size: 0.9rem;
  line-height: 2rem;
  font-weight: 400;
  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
  }
  text-align: center;
`

export default Footer
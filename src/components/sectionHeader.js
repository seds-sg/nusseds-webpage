import { SmallFont } from "./textStyles"
import React from "react"
import styled from "styled-components"

const Section = ({ className, headerText }) => (
  <div className={className}>
    <SectionHeaderLine />
    <SectionHeaderText>{headerText}</SectionHeaderText>
    <SectionHeaderLine />
  </div>
)

const SectionHeaderWrapper = styled(Section)`
  display: flex;
  align-items: center;
  padding: 4vw 0;
`
const SectionHeaderLine = styled.div`
  height: 0rem;
  flex: 1 1 auto;
  border: 0;
  border-top: 0.5px solid white;
  border-bottom: 0.5px solid white;
`
const SectionHeaderText = styled(SmallFont)`
  margin: 0 1rem;
`

export default SectionHeaderWrapper

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ButtonFont } from "../components/textStyles"

const StyledButtonText = styled(ButtonFont)`
  font-size: 1.125rem;
  font-weight: 900;
`

const Button = ({ className, buttonText, onClick, children }) => (
	<button className={className} onClick={onClick}>
		<StyledButtonText>{buttonText}</StyledButtonText>
	</button>
)

const StyledButton = styled(Button)`
  padding: 1rem 1.5rem;
  background: none;
  border: 1px solid white;
  line-height: 1;
  margin-bottom: 0.35rem;

  &:hover {
    background: #f8f3e9;
    ${StyledButtonText} {
      color: #141e22;
    }
  }
`

export const IconButton = ({ onClick, children }) => (
  <StyledIconButton onClick={onClick}>
    {children}
  </StyledIconButton>
)

const StyledIconButton = styled.button`
  font-size: 2rem;
  width: 4rem;
  height: 4rem;
  background: none;
  border: 1px solid white;
  line-height: 1;
  color: #f8f3e9;
  border-radius: 100px;
  &:hover {
    background: #f8f3e9;
    color: #141e22;
  }
  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
    width: 2.8rem;
    height: 2.8rem;
  }
`

StyledButton.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default StyledButton

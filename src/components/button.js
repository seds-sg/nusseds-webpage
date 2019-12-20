import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DescriptionFont } from '../components/textStyles';

const StyledButtonText = styled(DescriptionFont)`
	font-size: 1.125rem;
	font-weight: 900;
`;

const Button = ({ className, buttonText, onClick }) => (
	<button className={className} onClick={onClick}>
		<StyledButtonText>{buttonText}</StyledButtonText>
	</button>
);

const StyledButton = styled(Button)`
  padding: 1.5rem 2.5rem;
  background: none;
  border: 1px solid white;

  &:hover {
    background: white;
    ${StyledButtonText} {
      color: #141e22
    }
  }
`;

StyledButton.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default StyledButton;

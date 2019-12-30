import styled from 'styled-components';

const BaseFont = styled.div`
	color: white;
	/* SET FONT FAMILY HERE */
`;

export const LandingTitleFont = styled(BaseFont)`
  font-weight: 700;
  font-size: 4.5rem;
`;

export const PageHeaderFont = styled(BaseFont)`
  font-weight: 900;
  font-size: 5rem;
`;

export const TitleFont = styled(BaseFont)`
  font-weight: 700;
  font-size: 3rem;
`;

export const DescriptionFont = styled(BaseFont)`
  font-size: 1.5rem;
  line-height: 2rem;
  font-family: 'Courier New', Courier, monospace;
`;

export const SmallFont = styled(BaseFont)`
  font-size: 0.875rem;
  font-weight: 900;
`;

/**
 * If it is found that we are using many diferent font sizes and weights use the props way to pass in the weights and sizes: https://www.styled-components.com/docs/basics#adapting-based-on-props
 */

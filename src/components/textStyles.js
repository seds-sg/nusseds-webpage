import styled from 'styled-components';

const BaseFont = styled.div`
	color: #f8f3e9;
	/* SET FONT FAMILY HERE */
`;

export const LandingTitleFont = styled(BaseFont)`
  font-weight: 700;
  font-size: 4.5rem;
  font-family: Graphik;
  -webkit-font-smoothing: antialiased;

  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const PageHeaderFont = styled(BaseFont)`
  font-weight: 700;
  font-size: 5rem;
  font-family: Brown;
  letter-spacing: -0.04em;
  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const TitleFont = styled(BaseFont)`
  font-weight: 700;
  font-size: 3rem;
  font-family: Brown;
  letter-spacing: -0.04em;
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const DescriptionFont = styled(BaseFont)`
  font-size: 1.2rem;
  line-height: 2rem;
  font-family: Graebenbach Mono;
  // font-family: Mono;
  font-weight: 400;
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const SmallFont = styled(BaseFont)`
  font-size: 0.875rem;
  font-weight: 700;
  font-family: Brown;
`;

export const ButtonFont = styled(BaseFont)`
  font-family: Brown;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.02em;
`;

export const NavBarFont = styled(BaseFont)`
  font-family: Brown;
  font-weight: 400;
  font-size: 1rem;
`;

/**
 * If it is found that we are using many diferent font sizes and weights use the props way to pass in the weights and sizes: https://www.styled-components.com/docs/basics#adapting-based-on-props
 */

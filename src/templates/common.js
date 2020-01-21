import styled from 'styled-components';
import { DescriptionFont } from '../components/textStyles';

export const BlogPostWrapper = styled.div`color: white;`;

export const BlogPostContentWrapper = styled(DescriptionFont)`
	margin-top: 3rem;
	h3 {
		padding-bottom: 1rem;
	}
	p {
		padding-bottom: 2rem;
		margin-bottom: 0;
	}
`;

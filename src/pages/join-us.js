import React from 'react';
import { Link } from 'gatsby';

import Layout, { NavbarPaddingContainer } from '../components/layout';
import SEO from '../components/seo';

const JoinUsPage = () => (
	<Layout>
		<NavbarPaddingContainer>
			<SEO title="Join Us Page" />
			<h1>join us Page</h1>
			<p>Welcome to join us page</p>
			<Link to="/">Go back to the homepage</Link>
		</NavbarPaddingContainer>
	</Layout>
);

export default JoinUsPage;

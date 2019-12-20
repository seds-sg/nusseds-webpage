import React from 'react';
import { Link } from 'gatsby';

import Layout, { NavbarPaddingContainer } from '../components/layout';
import SEO from '../components/seo';

const ProjectsPage = () => (
	<Layout>
		<NavbarPaddingContainer>
			<SEO title="Projects Page" />
			<h1>Projects Page</h1>
			<p>Welcome to Projects page</p>
			<Link to="/">Go back to the homepage</Link>
		</NavbarPaddingContainer>
	</Layout>
);

export default ProjectsPage;

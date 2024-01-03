import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Seo = ({ title }) => {
	return <title>{title} | Jay Jariwala Portfolio</title>;
};

export default Seo;

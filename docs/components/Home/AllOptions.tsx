import React from 'react';
import styled from '@emotion/styled';

import CodePanel from '../../common/CodePanel';

const AllOptions = () => (
	<CodePanel heading="All Options for Customization">
		<Section>Table</Section>
	</CodePanel>
);

const Section = styled.section`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 20px;

	& > * {
		margin: 10px 15px;
		width: 150px;
	}
`;

export default AllOptions;

import React from 'react';
import styled from '@emotion/styled';

import Paragraph from '../../common/Paragraph';
import CodePanel from '../../common/CodePanel';
import Button from '../../common/Button';

const Gzipped = () => (
	<CodePanel heading="Only ~ 4K Gzipped">
		<Section>
			<Paragraph>
				The package contains the minified build file, along with the SVG Icons and the Styles
			</Paragraph>
			<Paragraph>Built into the Code, with a total of ~4K Gzipped</Paragraph>
		</Section>
		<Section>
			<a href="https://github.com/Cogoport/cogo-toast" target="_blank" rel="noopener noreferrer">
				<Button className="info">Check out on Github!</Button>
			</a>
		</Section>
	</CodePanel>
);

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 20px 0px;
`;

export default Gzipped;

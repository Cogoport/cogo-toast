import React from 'react';

import Paragraph from '../../../common-util/paragraph';
import CodePanel from '../../../common-util/code-panel';
import Button from '../../../common-util/button';

import Section from './styles';

const Types = () => (
	<CodePanel heading="Only ~ 4K Gzipped">
		<Section>
			<Paragraph>
				The package contains the minified build file, along with the SVG Icons and the Styles, built
				into the Code, with a total of ~4K Gzipped
			</Paragraph>
		</Section>
		<Section>
			<a href="https://github.com/Cogoport/cogo-toast" target="_blank" rel="noopener">
				<Button className="info">Check out on Github!</Button>
			</a>
		</Section>
	</CodePanel>
);

export default Types;

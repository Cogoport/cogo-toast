import React from 'react';

import CodePanel from '../../../common-util/code-panel';
import CodeBlock from '../../../common-util/code-block';
import { H4 } from '../../../common-util/headers';

import Section, { Group } from './styles';

const installCode = `npm install --save cogo-toast
yarn add cogo-toast`;

const importCode = `import cogoToast from 'cogo-toast';
cogoToast.success("Success!");`;

const Types = () => (
	<CodePanel heading="Get Started, Plug &amp; Play">
		<Section>
			<Group>
				<H4>Install via NPM or Yarn</H4>
				<CodeBlock className="bash">{installCode}</CodeBlock>
			</Group>
			<Group>
				<H4>Usage</H4>
				<CodeBlock>{importCode}</CodeBlock>
			</Group>
		</Section>
	</CodePanel>
);

export default Types;

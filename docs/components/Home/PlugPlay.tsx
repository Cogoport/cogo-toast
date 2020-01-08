import React from 'react';
import styled from '@emotion/styled';

import CodePanel from '../../common/CodePanel';
import CodeBlock from '../../common/CodeBlock';
import { H4 } from '../../common/Headers';

const installCode = `npm install --save cogo-toast
yarn add cogo-toast`;

const importCode = `import cogoToast from 'cogo-toast';
cogoToast.success("Success!");`;

const PlugPlay = () => (
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

const Section = styled.section`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 20px 0px;

	& > * {
		margin: 10px 15px;
		min-width: 350px;
	}
`;

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;

	& > * {
		margin: 5px 0px;
	}
`;

export default PlugPlay;

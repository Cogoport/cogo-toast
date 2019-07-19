import React from 'react';

import cogoToast from 'cogo-toast';

import Paragraph from '../../../common-util/paragraph';
import CodePanel from '../../../common-util/code-panel';
import CodeBlock from '../../../common-util/code-block';
import Button from '../../../common-util/button';

import Section, { Group } from './styles';

const showToast = () => {
	cogoToast.info(
		<div>
			<b>Awesome!</b>
			<div>Isn't it?</div>
		</div>,
	);
};

const code = `cogoToast.info(
  <div>
    <b>Awesome!</b>
    <div>Isn't it?</div>
  </div>
);`;

const UseJSX = () => (
	<CodePanel heading="Use JSX">
		<Section>
			<Group>
				<Paragraph>
					cogoToast is built using React. Which means any valid jsx can be used as the message in
					cogoToast
				</Paragraph>
			</Group>
			<Group className="code">
				<CodeBlock>{code}</CodeBlock>
				<Button className="primary" onClick={showToast}>
					Show Me
				</Button>
			</Group>
		</Section>
	</CodePanel>
);

export default UseJSX;

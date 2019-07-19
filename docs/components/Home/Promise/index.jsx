import React from 'react';

import cogoToast from 'cogo-toast';

import Paragraph from '../../../common-util/paragraph';
import CodePanel from '../../../common-util/code-panel';
import CodeBlock from '../../../common-util/code-block';
import Button from '../../../common-util/button';

import Section, { Group } from './styles';

const showToast = () => {
	cogoToast.loading('Loading your data...').then(() => {
		cogoToast.success('Data Successfully Loaded');
	});
};

const code = `cogoToast.loading('Loading your data...').then(() => {
  cogoToast.success('Data Successfully Loaded');
});`;

const Types = () => (
	<CodePanel heading="Returns a Promise, With Useful Callbacks">
		<Section>
			<Group>
				<Paragraph>Returns a promise which resolves when the toast is about to hide.</Paragraph>
				<Paragraph>
					This can be useful to do some action when the toast has completed showing.
				</Paragraph>
			</Group>
			<Group className="code">
				<CodeBlock>{code}</CodeBlock>
				<Button className="primary" onClick={showToast}>
					Show Me
				</Button>
			</Group>
			<Group>
				<Paragraph>
					When hideAfter = 0, It returns a callback function that hides the toast, instead of a
					promise.
				</Paragraph>
			</Group>
		</Section>
	</CodePanel>
);

export default Types;

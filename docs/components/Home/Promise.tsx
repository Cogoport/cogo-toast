import React from 'react';

import styled from '@emotion/styled';
import cogoToast from 'cogo-toast';

import Paragraph from '../../common/Paragraph';
import CodePanel from '../../common/CodePanel';
import CodeBlock from '../../common/CodeBlock';
import Button from '../../common/Button';

const showToast = () => {
	cogoToast.loading('Loading your data...').then(() => {
		cogoToast.success('Data Successfully Loaded');
	});
};

const code = `cogoToast.loading('Loading your data...').then(() => {
  cogoToast.success('Data Successfully Loaded');
});`;

const Promise = () => (
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

const Section = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 20px 0px;
	max-width: 90%;
`;

const Group = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 10px;

	& > * {
		margin: 5px 0px;
	}
`;

export default Promise;

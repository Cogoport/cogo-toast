import React from 'react';

import styled from '@emotion/styled';
import cogoToast from 'cogo-toast';

import CodePanel from '../../common/CodePanel';
import Button from '../../common/Button';

const positions = [
	'top-left',
	'top-center',
	'top-right',
	'bottom-left',
	'bottom-center',
	'bottom-right',
];

const showMessage = (position) => cogoToast.info('This is an info message.', { position });

const showMessageWithHeading = (position) => {
	cogoToast.info('This is an info message.', { position, heading: 'Information' });
};

const codeBlock = (
	<CodePanel.Block>
		{
			"cogoToast.info(\"This is an info message\", { position: 'top-center', heading: 'Information' });"
		}
	</CodePanel.Block>
);

const Positions = () => (
	<CodePanel heading="Positions &amp; Heading" code={codeBlock}>
		<Section>
			{positions.map((position) => (
				<Group key={position}>
					<Button className="info" onClick={() => showMessage(position)}>
						{position}
					</Button>
					<Button className="primary" onClick={() => showMessageWithHeading(position)}>
						With Heading
					</Button>
				</Group>
			))}
		</Section>
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

const Group = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	& > * {
		margin: 10px 0px;
	}
`;

export default Positions;

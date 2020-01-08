import React from 'react';
import styled from '@emotion/styled';
import cogoToast from 'cogo-toast';

import CodePanel from '../../common/CodePanel';
import Button from '../../common/Button';

const types = ['success', 'info', 'loading', 'warn', 'error'];

const showMessage = (type) => {
	const { hide } = cogoToast[type](`This is a ${type} message.`, {
		onClick: () => {
			hide();
		},
	});
};

const showAll = () => types.forEach((type) => showMessage(type));

const code = types.reduce(
	(prev, type) => `${prev ? `${prev} \n` : ''} cogoToast.${type}('This is a ${type} message');`,
	'',
);

const codeBlock = <CodePanel.Block>{code}</CodePanel.Block>;

const Types = () => (
	<CodePanel heading="5 Built in Types" code={codeBlock}>
		<Section>
			{types.map((type) => (
				<Button key={type} className={type} onClick={() => showMessage(type)}>
					{type}
				</Button>
			))}
		</Section>
		<Button className="primary" onClick={showAll}>
			Show All
		</Button>
	</CodePanel>
);

const Section = styled.section`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 20px 0px;

	& > * {
		margin: 10px 15px;
		width: 120px;
	}
`;

export default Types;

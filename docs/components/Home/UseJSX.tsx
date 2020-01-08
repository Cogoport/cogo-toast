import React from 'react';

import styled from '@emotion/styled';
import cogoToast from 'cogo-toast';

import Paragraph from '../../common/Paragraph';
import CodePanel from '../../common/CodePanel';
import CodeBlock from '../../common/CodeBlock';
import Button from '../../common/Button';

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

export default UseJSX;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import { H3 } from './Headers';
import CodeBlock from './CodeBlock';
import CodeIcon from './CodeIcon';

const CodePanel = ({ heading, code, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Container>
			<Row>
				<H3>{heading}</H3>
				{code && <CodeIcon onClick={() => setIsOpen((prev) => !prev)} />}
			</Row>
			{isOpen && <CodeParent>{code}</CodeParent>}
			{children}
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px 30px;
`;

const Row = styled.div`
	display: flex;
	align-items: center;
`;

const CodeParent = styled.div`
	margin: 20px 0px;
	display: flex;
	justify-content: center;
`;

CodePanel.Block = CodeBlock;

CodePanel.propTypes = {
	heading: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	code: PropTypes.node,
};

CodePanel.defaultProps = {
	code: '',
};

export default CodePanel;

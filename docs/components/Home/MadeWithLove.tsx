import React from 'react';
import styled from '@emotion/styled';

import HeartIcon from '../../common/HeartIcon';

const MadeWithLove = () => (
	<Anchor href="https://www.cogoport.com" target="_blank" rel="noopener">
		<Container>
			Made with <HeartIcon />
			at
			<Logo
				src="https://dev-cogoport.s3.ap-south-1.amazonaws.com/2a06ea838cc4453ab9d7cb7cec5d27b4.png"
				alt="Cogoport - Simplifying International Logistics"
			/>
		</Container>
	</Anchor>
);

const Container = styled.p`
	margin: 0px auto;
	padding: 20px;
	border-top: 1px dashed #ddd;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #000;
	text-decoration: none;
	font-size: 14px;
`;

const Anchor = styled.a`
	color: #000;
	text-decoration: none;
`;

const Logo = styled.img`
	margin: 0px 8px;
	margin-top: 2px;
	width: 90px;
`;

export default MadeWithLove;

import React from 'react';

import Container, { Anchor, Logo } from './styles';
import HeartIcon from './heart-icon';

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

export default MadeWithLove;

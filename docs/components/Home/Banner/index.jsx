import React from 'react';

import Tag from '../../../common-util/tag';
import { H1, H2 } from '../../../common-util/headers';
import Paragraph from '../../../common-util/paragraph';

import Container, { Section, Row } from './styles';

const Hero = () => (
	<Container>
		<Section>
			<Row>
				<Tag>MIT</Tag>
				<Tag>Open Source</Tag>
			</Row>
			<H1>CogoToast</H1>
			<H2>Beautiful, Zero-Configuration, Toast Messages</H2>
		</Section>
		<Section>
			<Paragraph>- Plug &amp; Play. No configuration required</Paragraph>
			<Paragraph>~ 4K Gzipped (All Inclusive of Icons, Styles, &amp; Code)</Paragraph>
			<Paragraph>- Completely Customizable</Paragraph>
			<Paragraph>- Built with React</Paragraph>
		</Section>
	</Container>
);

export default Hero;

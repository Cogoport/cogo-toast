import React from 'react';
import styled from '@emotion/styled';

import Tag from '../../common/Tag';
import { H1, H2 } from '../../common/Headers';
import Paragraph from '../../common/Paragraph';

import colors from '../../util/colors';

const Banner = () => (
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

const Container = styled.div`
	width: 100%;
	background: ${colors.ACCENT_LIGHT};
	background: linear-gradient(to top, ${colors.ACCENT_LIGHT}, ${colors.ACCENT_DARK});
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px 30px;
`;

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 15px 0px;
`;

const Row = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

export default Banner;

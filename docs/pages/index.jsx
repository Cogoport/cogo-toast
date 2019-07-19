import React from 'react';
import styled from '@emotion/styled';

import Banner from '../components/Home/Banner';
import Types from '../components/Home/Types';
import PlugPlay from '../components/Home/PlugPlay';
import Positions from '../components/Home/Positions';
import Promise from '../components/Home/Promise';
import UseJSX from '../components/Home/UseJSX';
import Gzipped from '../components/Home/Gzipped';
import MadeWithLove from '../components/Home/MadeWithLove';

const Home = () => (
	<>
		<Banner />
		<Types />
		<PlugPlay />
		<Positions />
		<UseJSX />
		<Promise />
		{/* <Gzipped /> */}
		<MadeWithLove />

		<StarContainer>
			<a
				className="github-button"
				href="https://github.com/Cogoport/cogo-toast"
				data-size="large"
				data-show-count="true"
				aria-label="Star Cogoport/cogo-toast on GitHub"
			>
				Star on Github
			</a>
		</StarContainer>
	</>
);

const StarContainer = styled.div`
	position: fixed;
	bottom: 20px;
	right: 20px;

	a {
		color: #404040;
		text-decoration: none;
		border: 1px solid #404040;
		border-radius: 4px;
		font-size: 13px;
		padding: 8px 12px;
	}
`;

export default Home;

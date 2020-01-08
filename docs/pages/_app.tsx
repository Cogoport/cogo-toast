import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import Meta from '../components/Meta';
import GlobalStyles from '../components/Global-Styles';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		const { asPath, query = {} } = ctx;

		const initialProps = Component.getInitialProps
			? await Component.getInitialProps({ ...ctx })
			: {};
		const pageProps = { pathname: asPath, query, ...(initialProps || {}) };

		return { pageProps };
	}

	render() {
		const { Component, pageProps = {} } = this.props;

		return (
			<>
				<Head>
					<title>Beautiful, Zero Configuration, Toast Messages | CogoToast</title>
					<Meta />
					<script async defer src="https://buttons.github.io/buttons.js" />
				</Head>
				<GlobalStyles />
				<Component {...pageProps} />
			</>
		);
	}
}

export default MyApp;

import React from 'react';

const { linkPrefix = '/' } = process.env;

const Meta = () => (
	<>
		<meta
			key="viewport"
			name="viewport"
			content="width=device-width, initial-scale=1, shrink-to-fit=no"
		/>

		<link
			rel="apple-touch-icon"
			sizes="76x76"
			href={`${linkPrefix}meta/apple-touch-icon.png`}
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href={`${linkPrefix}meta/favicon-32x32.png`}
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href={`${linkPrefix}meta/favicon-16x16.png`}
		/>
		<link rel="manifest" href={`${linkPrefix}meta/site.webmanifest`} />
		<link rel="mask-icon" href={`${linkPrefix}meta/safari-pinned-tab.svg`} color="#4cba70" />

		<meta name="msapplication-TileColor" content="#ffffff" />
		<meta name="theme-color" content="#ffffff" />

		<meta
			key="title"
			name="title"
			content="Beautiful, Zero Configuration, Toast Messages | CogoToast"
		/>

		<meta
			key="description"
			name="description"
			content="Open Source, Plug and Play - Toast Messages System for React. ~ 4K Gzipped (All Inclusive of Icons, Styles, and Code) No configuration required."
		/>

		<meta
			key="keywords"
			name="keywords"
			content="react,toast,react-toast,toast-react,toastr,toast messages,messages,notifications,react notifications,component,components,react component,react components,ui,cogoport,open source"
		/>

		<meta key="image" property="image" content={`${linkPrefix}meta/safari-pinned-tab.svg`} />

		<meta key="author" name="author" content="Cogoport" />

		<meta
			key="og:title"
			name="og:title"
			content="Beautiful, Zero Configuration, Toast Messages | CogoToast"
		/>

		<meta
			key="og:description"
			name="og:description"
			content="Open Source, Plug and Play - Toast Messages System for React. ~ 4K Gzipped (All Inclusive of Icons, Styles, and Code) No configuration required."
		/>

		<meta key="og:url" property="og:url" content="https://cogoport.github.io/cogo-toast" />
		<meta
			key="og:image"
			property="og:image"
			content={`${linkPrefix}meta/safari-pinned-tab.svg`}
		/>

		<meta key="twitter:site" name="twitter:site" content="https://cogoport.github.io/cogo-toast" />
		<meta key="twitter:card" name="twitter:card" content="summary_large_image" />

		<meta
			key="twitter:image"
			name="twitter:image"
			content={`${linkPrefix}meta/safari-pinned-tab.svg`}
		/>
	</>
);

export default Meta;

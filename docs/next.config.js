module.exports = {
	assetPrefix: process.env.NODE_ENV === 'production' ? '/cogo-toast/' : '',
	env: {
		linkPrefix: process.env.NODE_ENV === 'production' ? '/cogo-toast/' : '',
	},
	typescript: {
		ignoreDevErrors: true,
		ignoreBuildErrors: true,
	},
};

import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';

import pkg from './package.json';

const config = {
	input: 'src/index.tsx',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			exports: 'named',
			sourcemap: false,
			globals: {
				react: 'React',
				'react-dom': 'ReactDOM',
			},
		},
		{
			file: pkg.module,
			format: 'es',
			exports: 'named',
			sourcemap: false,
			globals: {
				react: 'React',
				'react-dom': 'ReactDOM',
			},
		},
	],
	plugins: [
		postcss({}),
		url({ exclude: ['**/*.svg'] }),
		svgr(),
		resolve(),
		typescript({ jsx: 'preserve', module: 'CommonJS' }),
		commonjs({ extensions: ['.js', '.ts', '.jsx', '.tsx'] }),
	],
};

export default config;

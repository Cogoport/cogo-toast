import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';

import svgr from '@svgr/rollup';

import react from 'react';
import reactDom from 'react-dom';

import pkg from './package.json';

const config = {
	input: 'src/index.tsx',
	output: [
		{ file: pkg.main, format: 'cjs', exports: 'named', sourcemap: false },
		{ file: pkg.module, format: 'es', exports: 'named', sourcemap: false },
	],
	plugins: [
		external(),
		postcss({}),
		url({ exclude: ['**/*.svg'] }),
		svgr(),
		resolve(),
		typescript({
			tsconfig: './tsconfig.json',
			lib: ['es5', 'es6', 'dom'],
			target: 'es5',
		}),
		commonjs({
			namedExports: { react: Object.keys(react), 'react-dom': Object.keys(reactDom) },
			extensions: ['.js', '.ts', '.jsx', '.tsx'],
		}),
	],
};

export default config;

import React from 'react';
import { node, string } from 'prop-types';

import Highlight, { defaultProps } from 'prism-react-renderer';

import dark from 'prism-react-renderer/themes/vsDark';
import ultraMin from 'prism-react-renderer/themes/ultramin';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import dracula from 'prism-react-renderer/themes/dracula';

const CodeBlock = ({ children, className: langClass, theme }) => {
	const themes = {
		darkPlus: dark,
		dark,
		ultraMin,
		shadesOfPurple,
		oceanicNext,
		nightOwl,
		duotoneLight,
		duotoneDark,
		dracula,
	};
	const language = langClass.replace(/language-/, '');
	return (
		<Highlight {...defaultProps} code={children} language={language} theme={themes[theme]}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={className}
					style={{
						...style,
						padding: '16px 24px',
						borderRadius: 8,
						lineHeight: 2,
						margin: '15px 5px',
						overflow: 'auto',
					}}
				>
					{tokens.map((line, i) => (
						<div key={`line_${i}`} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={`token_${key}`} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
};

CodeBlock.propTypes = {
	children: node.isRequired,
	className: string,
	theme: string,
};

CodeBlock.defaultProps = {
	className: 'javascript',
	theme: 'darkPlus',
};

export default CodeBlock;

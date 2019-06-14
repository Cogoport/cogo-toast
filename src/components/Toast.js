import React from 'react';
import {
	string, number, func, shape,
} from 'prop-types';

import Icons from './Icons';

const colors = {
	success: '#6EC05F',
	info: '#1271EC',
	warn: '#FED953',
	error: '#D60A2E',
	loading: '#0088ff',
};

const Toast = ({
	type, text, heading, hideAfter, position, renderIcon, bar = {}, onClick,
}) => {
	const CurrentIcon = Icons[type];

	const className = ['ct-toast', onClick ? ' ct-cursor-pointer' : ''].join(' ');

	const place = (position || 'top-center').includes('bottom') ? 'Bottom' : 'Top';

	const borderLeft = `${bar.size || '3px'} ${bar.style || 'solid'} ${bar.color || colors[type]}`;
	const marginType = `margin${place}`;

	const style = {
		paddingLeft: heading ? 25 : undefined,
		minHeight: heading ? 50 : undefined,
		borderLeft,
		[marginType]: 12,
	};

	const clickProps = {
		tabIndex: 0,
		onClick,
		role: 'button',
		onKeyPress: (event) => {
			if (event.keyCode === 13) {
				onClick();
			}
		},
	};

	return (
		<div className={className} style={style} {...(onClick ? clickProps : {})}>
			{renderIcon ? renderIcon() : <CurrentIcon />}
			<div className={heading ? 'ct-text-group-heading' : 'ct-text-group'}>
				{heading && <h4 className="ct-heading">{heading}</h4>}
				<div className="ct-text">{text}</div>
			</div>
		</div>
	);
};

Toast.propTypes = {
	type: string.isRequired,
	text: string.isRequired,
	hideAfter: number,
	heading: string,
	position: string,
	renderIcon: func,
	bar: shape({}),
	onClick: func,
};

Toast.defaultProps = {
	hideAfter: 3,
	heading: null,
	position: 'top-center',
	renderIcon: null,
	bar: {},
	onClick: null,
};

export default Toast;

import React, { useState, useEffect } from 'react';
import {
	string, number, bool, func, shape, oneOfType,
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
	id,
	type,
	text,
	heading,
	show,
	onHide,
	hideAfter,
	position,
	renderIcon,
	bar = {},
	onClick,
}) => {
	const place = (position || 'top-center').includes('bottom') ? 'Bottom' : 'Top';
	const marginType = `margin${place}`;

	const className = ['ct-toast', onClick ? ' ct-cursor-pointer' : ''].join(' ');
	const borderLeft = `${bar.size || '3px'} ${bar.style || 'solid'} ${bar.color || colors[type]}`;

	const CurrentIcon = Icons[type];

	const [animStyles, setAnimStyles] = useState({ opacity: 0, [marginType]: -15 });

	const style = {
		paddingLeft: heading ? 25 : undefined,
		minHeight: heading ? 50 : undefined,
		borderLeft,
		...animStyles,
	};

	const handleHide = () => {
		setTimeout(() => {
			setAnimStyles({ opacity: 0, [marginType]: '-15px' });

			setTimeout(() => {
				onHide(id, position);
			}, 300);
		}, hideAfter * 1000);
	};

	useEffect(() => {
		setTimeout(() => {
			setAnimStyles({ opacity: 1, [marginType]: '15px' });
		}, 50);

		if (hideAfter !== 0) {
			handleHide();
		}
	}, []);

	useEffect(() => {
		if (!show) {
			handleHide();
		}
	}, [show]);

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
	id: oneOfType([string, number]),
	type: string.isRequired,
	text: string.isRequired,
	show: bool,
	onHide: func,
	hideAfter: number,
	heading: string,
	position: string,
	renderIcon: func,
	bar: shape({}),
	onClick: func,
};

Toast.defaultProps = {
	id: null,
	show: true,
	onHide: null,
	hideAfter: 3,
	heading: null,
	position: 'top-center',
	renderIcon: null,
	bar: {},
	onClick: null,
};

export default Toast;

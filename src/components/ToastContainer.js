import React, { Fragment, useState, useEffect } from 'react';
import { shape, number } from 'prop-types';

import Toast from './Toast';

const defaultToasts = {
	topLeft: [],
	topCenter: [],
	topRight: [],
	bottomLeft: [],
	bottomCenter: [],
	bottomRight: [],
};

const ToastContainer = ({ toast, hiddenID }) => {
	const [allToasts, setToasts] = useState(defaultToasts);

	useEffect(() => {
		if (toast) {
			setToasts((prevToasts) => {
				let position = toast.position || 'top-center';
				position = position.replace(/-([a-z])/g, g => g[1].toUpperCase()) || 'topCenter';
				return { ...prevToasts, [position]: [...prevToasts[position], toast] };
			});
		}
	}, [toast]);

	const handleRemove = (id, position) => {
		setToasts((prevToasts) => {
			const toastPosition =				(position || 'top-center').replace(/-([a-z])/g, g => g[1].toUpperCase()) || 'topCenter';
			return {
				...prevToasts,
				[toastPosition]: prevToasts[toastPosition].filter(item => item.id !== id),
			};
		});
	};

	const toastMapper = (type, item) => (
		<Toast
			key={`${type}-${item.id}`}
			{...item}
			isHidden={hiddenID === item.id}
			onHide={handleRemove}
		/>
	);

	return (
		<Fragment>
			<div className="ct-row">
				<div className="ct-group">{allToasts.topLeft.map(item => toastMapper('tl', item))}</div>
				<div className="ct-group">{allToasts.topCenter.map(item => toastMapper('tc', item))}</div>
				<div className="ct-group">{allToasts.topRight.map(item => toastMapper('tr', item))}</div>
			</div>
			<div className="ct-row">
				<div className="ct-group ct-flex-bottom">
					{allToasts.bottomLeft.map(item => toastMapper('bl', item))}
				</div>
				<div className="ct-group ct-flex-bottom">
					{allToasts.bottomCenter.map(item => toastMapper('bc', item))}
				</div>
				<div className="ct-group ct-flex-bottom">
					{allToasts.bottomRight.map(item => toastMapper('br', item))}
				</div>
			</div>
		</Fragment>
	);
};

ToastContainer.propTypes = {
	toast: shape({}),
	hiddenID: number,
};

ToastContainer.defaultProps = {
	toast: null,
	hiddenID: null,
};

export default ToastContainer;

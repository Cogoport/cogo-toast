import React, { Fragment, useState, useEffect } from 'react';
import { shape } from 'prop-types';

import Toast from './Toast';

const defaultToasts = {
	topLeft: [],
	topCenter: [],
	topRight: [],
	bottomLeft: [],
	bottomCenter: [],
	bottomRight: [],
};

const ToastContainer = ({ toast }) => {
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

	return (
		<Fragment>
			<div id="ct-top">
				<div className="ct-group">{allToasts.topLeft.map(Toast)}</div>
				<div className="ct-group">{allToasts.topCenter.map(Toast)}</div>
				<div className="ct-group">{allToasts.topRight.map(Toast)}</div>
			</div>
			<div id="ct-bottom">
				<div className="ct-group ct-flex-bottom">{allToasts.bottomLeft.map(Toast)}</div>
				<div className="ct-group ct-flex-bottom">{allToasts.bottomCenter.map(Toast)}</div>
				<div className="ct-group ct-flex-bottom">{allToasts.bottomRight.map(Toast)}</div>
			</div>
		</Fragment>
	);
};

ToastContainer.propTypes = {
	toast: shape({}),
};

ToastContainer.defaultProps = {
	toast: null,
};

export default ToastContainer;

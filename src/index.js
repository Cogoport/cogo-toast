import React from 'react';
import ReactDOM from 'react-dom';

import ToastContainer from './components/ToastContainer';

import './styles/styles.css';

const cogoToast = (text, options) => {
	let rootContainer = document.getElementById('ct-container');

	if (!rootContainer) {
		rootContainer = document.createElement('div');
		rootContainer.id = 'ct-container';
		document.body.append(rootContainer);
	}

	ReactDOM.render(<ToastContainer toast={{ text, ...options }} />, rootContainer);
};

const types = ['success', 'info', 'warn', 'error', 'loading'];

types.forEach((type) => {
	cogoToast[type] = (text, options) => cogoToast(text, { ...options, type });
});

export default cogoToast;

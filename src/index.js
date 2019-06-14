import React from 'react';
import ReactDOM from 'react-dom';

import ToastContainer from './components/ToastContainer';
import Toast from './components/Toast';

import './styles/styles.css';

let ctToastCount = 0;

const cogoToast = (text, options) => {
	let rootContainer = document.getElementById('ct-container');

	if (!rootContainer) {
		rootContainer = document.createElement('div');
		rootContainer.id = 'ct-container';
		document.body.append(rootContainer);
	}

	ctToastCount += 1;

	const hideTime = (options.hideAfter === undefined ? 3 : options.hideAfter) * 1000;
	const toast = { id: ctToastCount, text, ...options };

	ReactDOM.render(<ToastContainer toast={toast} />, rootContainer);

	const hide = () => {
		ReactDOM.render(<ToastContainer hiddenID={toast.id} />, rootContainer);
	};

	const completePromise = new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, hideTime);
	});

	return hideTime <= 0 ? hide : completePromise;
};

const types = ['success', 'info', 'warn', 'error', 'loading'];

types.forEach((type) => {
	cogoToast[type] = (text, options) => cogoToast(text, { ...options, type });
});

export { Toast };

export default cogoToast;

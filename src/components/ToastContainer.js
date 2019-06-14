import React, { useState, useEffect } from 'react';
import { shape, number } from 'prop-types';

import Toast from './Toast';

const camelCase = str => str.replace(/-([a-z])/g, g => g[1].toUpperCase());

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
				const position = camelCase(toast.position || 'top-center');
				return { ...prevToasts, [position]: [...prevToasts[position], toast] };
			});
		}
	}, [toast]);

	const handleRemove = (id, position) => {
		setToasts((prevToasts) => {
			const toastPosition = camelCase(position || 'top-center');
			return {
				...prevToasts,
				[toastPosition]: prevToasts[toastPosition].filter(item => item.id !== id),
			};
		});
	};

	const rows = ['top', 'bottom'];
	const groups = ['Left', 'Center', 'Right'];

	return (
		<>
			{rows.map(row => (
				<div key={`row_${row}`} className="ct-row">
					{groups.map((group) => {
						const type = `${row}${group}`;
						return (
							<div
								key={type}
								className={['ct-group', row === 'bottom' ? 'ct-flex-bottom' : ''].join(' ')}
							>
								{allToasts[type].map(item => (
									<Toast
										key={`${type}_${item.id}`}
										{...item}
										show={hiddenID !== item.id}
										onHide={handleRemove}
									/>
								))}
							</div>
						);
					})}
				</div>
			))}
		</>
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

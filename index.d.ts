import { MouseEventHandler } from 'react';

export type CTOptions = Partial<{
	hideAfter: number;
	position:
		| 'top-left'
		| 'top-center'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-center'
		| 'bottom-right';
	heading: string;
	role: string;
	toastContainerID: string;
	renderIcon: Function;
	bar: Partial<{
		size: string;
		style: 'solid' | 'dashed' | 'dotted';
		color: string;
	}>;
	onClick: MouseEventHandler;
}>;

export type HideToastFunction = () => void;

export type CTReturn = Promise<void> & { hide?: HideToastFunction };

export type CTMethod = (message: string, options?: CTOptions) => CTReturn;

export type CTMainMethod = (message: string, options?: CTOptions & { type: string }) => CTReturn;

export type CToast = CTMainMethod & {
	success: CTMethod;
	warn: CTMethod;
	info: CTMethod;
	error: CTMethod;
	loading: CTMethod;
};

declare namespace cogoToast {
	const success: CTMethod;
	const info: CTMethod;
	const loading: CTMethod;
	const warn: CTMethod;
	const error: CTMethod;
}

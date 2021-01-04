import { ReactNode, MouseEventHandler } from 'react';

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
	onHide: Function;
}>;

export type HideToastFunction = () => void;

export type CTReturn = Promise<void> & { hide?: HideToastFunction };

export type CTMethod = (message: string | ReactNode, options?: CTOptions) => CTReturn;

export type CTMainMethod = (
	message: string | ReactNode,
	options?: CTOptions & { type: string },
) => CTReturn;

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

export default cogoToast;

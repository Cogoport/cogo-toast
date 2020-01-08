import styled from '@emotion/styled';
import colors from '../util/colors';

const Button = styled.button`
	background: #fff;
	border-radius: 4px;
	border: 1px solid ${colors.OUTLINE};
	color: ${colors.TEXT};
	padding: 8px 20px;
	font-size: 14px;
	cursor: pointer;
	text-transform: capitalize;
	transition: 0.2s all ease-in-out;

	&.primary {
		border: 2px solid ${colors.ACCENT_DARK};
		background: ${colors.ACCENT_DARK};
		color: #fff;
		min-width: 150px;

		&:hover {
			background: #fff;
			color: ${colors.ACCENT_DARK};
		}
	}

	&.success {
		&:hover {
			border: 1px solid ${colors.SUCCESS};
			color: ${colors.SUCCESS};
		}
	}

	&.info {
		&:hover {
			border: 1px solid ${colors.INFO};
			color: ${colors.INFO};
		}
	}

	&.loading {
		&:hover {
			border: 1px solid ${colors.LOADING};
			color: ${colors.LOADING};
		}
	}

	&.warn {
		&:hover {
			border: 1px solid ${colors.WARN};
			color: ${colors.WARN};
		}
	}

	&.error {
		&:hover {
			border: 1px solid ${colors.ERROR};
			color: ${colors.ERROR};
		}
	}

	&:focus {
		outline: none;
	}
`;

export default Button;

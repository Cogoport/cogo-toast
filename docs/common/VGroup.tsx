import styled from '@emotion/styled';

const VGroup = styled.div`
	flex: ${({ flex }) => flex || 1} !important;

	& > * {
		flex: 1;
		margin: ${({ spacing }) => spacing || '10px'} 0px;

		&:first-child {
			margin-top: 0px;
		}

		&:last-child {
			margin-bottom: 0px;
		}
	}
`;

export default VGroup;

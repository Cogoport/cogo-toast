import styled from '@emotion/styled';

export default styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 20px 0px;
	max-width: 90%;
`;

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 10px;

	& > * {
		margin: 5px 0px;
	}
`;

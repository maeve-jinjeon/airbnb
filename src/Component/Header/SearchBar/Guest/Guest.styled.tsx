import styled, { css } from "styled-components";

const StyledGuest = styled.div`
	${({ theme: { width } }) => css`
		cursor: pointer;
		display: flex;
		align-items: center;
		width: ${width.guest};

		> :first-child {
			margin-left: 24px;
		}

		svg {
			margin-left: 20px;
		}
	`}
`;
export default StyledGuest;

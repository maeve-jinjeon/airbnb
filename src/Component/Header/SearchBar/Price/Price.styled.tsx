import styled, { css } from "styled-components";

const StyledPrice = styled.div`
	${({ theme: { width, colors } }) => css`
		display: flex;
		align-items: center;
		width: ${width.price};
		border-right: solid 1px ${colors.grey5};

		> :first-child {
			margin-left: 24px;
		}

		svg {
			margin-left: 20px;
		}
	`}
`;
export default StyledPrice;

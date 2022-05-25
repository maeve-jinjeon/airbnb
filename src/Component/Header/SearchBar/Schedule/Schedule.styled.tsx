import styled, { css } from "styled-components";

const StyledSchedule = styled.div`
	${({ theme: { width, colors } }) => css`
		width: ${width.schedule};
		display: flex;
		border-right: solid 1px ${colors.grey5};
		align-items: center;

		> :first-child {
			margin-left: 40px;
		}
		> :nth-child(2) {
			margin-left: 24px;
		}
		svg {
			margin-left: 15px;
		}
	`}
`;

export default StyledSchedule;

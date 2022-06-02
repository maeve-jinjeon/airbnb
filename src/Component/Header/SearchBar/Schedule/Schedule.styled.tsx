import styled, { css } from "styled-components";

const StyledScheduleHover = styled.div`
	${({ theme: { colors, height, shadow } }) => css`
		width: 180px;
		display: flex;
		padding-left: 25px;
		align-items: center;

		:hover {
			height: ${height.searchbar};
			border: 1px solid ${colors.white};
			border-radius: 60px;
			box-shadow: ${shadow.main};
		}
	`}
`;

const StyledSchedule = styled.div`
	${({ theme: { width, colors } }) => css`
		width: ${width.schedule};
		display: flex;
		border-right: solid 1px ${colors.grey5};
		:hover {
			border-right: none;
		}

		> :first-child {
			padding-left: 40px;
		}
	`}
`;

export { StyledSchedule, StyledScheduleHover };

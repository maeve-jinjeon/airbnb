import styled, { css } from "styled-components";

const StyledGuestHover = styled.div`
	${({ theme: { colors, width, height, shadow } }) => css`
		width: ${width.guest};
		display: flex;

		:hover {
			height: ${height.searchbar};
			border: 1px solid ${colors.white};
			border-radius: 60px;
			box-shadow: ${shadow.main};
		}
	`}
`;

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
export { StyledGuest, StyledGuestHover };

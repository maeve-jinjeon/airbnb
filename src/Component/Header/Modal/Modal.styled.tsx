import styled, { css } from "styled-components";

interface IStyleModal {
	modal: string;
}

const StyledModalWrapper = styled.div`
	${({ theme: { width } }) => css`
		margin: 0 auto;
		margin-top: 16px;
		width: ${width.searchbar};
	`}
`;

const StyledModal = styled.div<IStyleModal>`
	${({ theme: { width, height, colors, transition }, modal }) => css`
		${transition.appear};
		${transition.main};

		${modal === "empty" &&
		css`
			${transition.disappear};
			display: none;
		`};

		width: ${width[`${modal}Modal`]};
		height: ${height[`${modal}Modal`]};
		float: right;
		border-radius: 40px;
		background-color: ${colors.white};
		box-shadow: 0px 4px 8px -4px ${colors.black};
		padding: 64px;
	`}
`;

const StyledGuestList = styled.li`
	${({ theme: { colors } }) => css`
		padding: 24px 0;
		display: flex;
		justify-content: space-between;
		border-bottom: solid 1px ${colors.grey4};
		:first-child {
			padding-top: 0;
		}
		:last-child {
			padding-bottom: 0;
			border: 0;
		}
	`}
`;

const StyledGuestDesc = styled.div`
	${({ theme: { fontSize, fontWeight, colors } }) => css`
		> :first-child {
			font-size: ${fontSize.medium};
			font-weight: ${fontWeight.large};
			line-height: 23px;
		}
		> :last-child {
			font-size: ${fontSize.small};
			font-weight: ${fontWeight.small};
			color: ${colors.grey3};
			line-height: 20px;
		}
	`}
`;

const StyledGuestBtns = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	> :nth-child(2) {
		width: 60px;
		text-align: center;
	}

	${({ theme: { fontSize, fontWeight } }) => css`
		font-size: ${fontSize.xLarge};
		font-weight: ${fontWeight.large};
	`}
`;

export { StyledModal, StyledModalWrapper, StyledGuestList, StyledGuestDesc, StyledGuestBtns };

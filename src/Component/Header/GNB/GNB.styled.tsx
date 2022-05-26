import styled, { css } from "styled-components";
import logoSrc from "util/logo.png";

const StyledGNB = styled.div`
	${({ theme: { width, height } }) => css`
		margin: 0 auto;
		width: ${width.header};
		height: ${height.GNB};
	`}
	box-sizing: border-box;
	align-items: center;
	justify-content: space-between;
	display: flex;
	padding: 10px;
`;

const StyledNavList = styled.ul`
	${({ theme: { fontSize, fontWeight } }) => css`
		display: flex;
		> li {
			font-size: ${fontSize.medium};
			font-weight: ${fontWeight.small};
			:not(:last-child) {
				margin-right: 24px;
			}
		}
	`}
`;

const GNBImg = styled.img.attrs({
	src: `${logoSrc}`,
})`
	${({ theme: { width } }) => css`
		alt: "logo";
		width: ${width.GNBImg};
		padding: 10px;
	`}
`;

const GNBAccountMenu = styled.div`
	${({ theme: { colors } }) => css`
		border: solid 1px ${colors.grey4};
		border-radius: 30px;
		padding: 4px;
		box-sizing: border-box;
		background-color: ${colors.white};
		width: 76px;
		height: 40px;
		line-height: 35px;
		text-align: center;
		> :first-child {
			margin-right: 15px;
		}
	`}
`;

export { StyledGNB, GNBImg, StyledNavList, GNBAccountMenu };
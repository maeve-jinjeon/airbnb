import styled, { css } from "styled-components";

const StyledPriceDetail = styled.div`
	${({ theme: { colors, fontSize, fontWeight } }) => css`
		color: ${colors.primary};

		> :nth-child(1) {
			color: ${colors.black};
			font-size: ${fontSize.medium};
			font-weight: ${fontWeight.large};
		}

		> :nth-child(2) {
			margin-top: 15px;
			color: ${colors.grey1};
			font-size: ${fontSize.large};
			font-weight: ${fontWeight.small};
		}

		> :nth-child(3) {
			margin-top: 5px;
			color: ${colors.grey3};
			font-size: ${fontSize.small};
			font-weight: ${fontWeight.small};
		}
	`}
`;

const CanvasWrapper = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
`;

const StyledCanvas = styled.canvas`
	width: 100%;
`;

const StyledRange = styled.input`
	${({ theme: { colors } }) => css`
		-webkit-appearance: none;
		appearance: none;
		outline: none;
		z-index: 1;
		background-color: ${colors.grey2};
		cursor: pointer;
		width: 100%;
		height: 0;
		margin: 0;

		::-webkit-slider-thumb {
			-webkit-appearance: none;
			appearance: none;
			width: 15px;
			height: 15px;
			border: solid 2px ${colors.grey2};
			border-radius: 15px;
			background-color: ${colors.white};
		}
	`}
	border-radius: 3px;
`;

export { StyledPriceDetail, CanvasWrapper, StyledCanvas, StyledRange };

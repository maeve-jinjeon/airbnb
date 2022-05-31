import styled, { css } from "styled-components";

const StyledPriceRangeSlider = styled.div`
	position: relative;
`;

const HiddenInput = styled.input`
	position: absolute;
	z-index: 2;
	width: 100%;
	height: 10px;
	-webkit-appearance: none;
	pointer-events: none;
	opacity: 0;

	::-webkit-slider-thumb {
		cursor: pointer;
		width: 20px;
		height: 20px;
		-webkit-appearance: none;
		pointer-events: all;
	}
`;

const Slider = styled.div`
	position: relative;
	z-index: 1;
	height: 10px;
`;

const LeftThumb = styled.div<{ left: number }>`
	${({ left, theme: { colors } }) => css`
		left: ${left}%;
		color: ${colors.grey1};
		border: solid 1px ${colors.grey1};
		border-radius: 50%;
		background-color: ${colors.white};
		width: 20px;
		height: 20px;
		text-align: center;
		font-size: 10px;
		font-weight: 500;
		line-height: 19px;
	`}
	position: absolute;
	z-index: 3;
	transform: translate(-12px, -12px);
`;

const RightThumb = styled.div<{ right: number }>`
	${({ right, theme: { colors } }) => css`
		right: ${100 - right}%;
		color: ${colors.grey1};
		border: solid 1px ${colors.grey1};
		border-radius: 50%;
		background-color: ${colors.white};
		width: 20px;
		height: 20px;
		text-align: center;
		font-size: 10px;
		font-weight: 500;
		line-height: 19px;
	`}
	position: absolute;
	z-index: 3;
	transform: translate(12px, -12px);
`;

export { StyledPriceRangeSlider, HiddenInput, Slider, LeftThumb, RightThumb };

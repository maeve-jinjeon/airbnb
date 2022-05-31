import { useState, ChangeEvent } from "react";
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
		width: 40px;
		height: 40px;
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
		color: ${colors.grey2};
		border: solid 1px ${colors.grey2};
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
	transform: translate(-10px, -10px);
`;

const RightThumb = styled.div<{ right: number }>`
	${({ right, theme: { colors } }) => css`
		right: ${100 - right}%;
		color: ${colors.grey2};
		border: solid 1px ${colors.grey2};
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
	transform: translate(10px, -10px);
`;

const PRICE_UNIT = 50000;
const DISTANCE_MIN_MAX = PRICE_UNIT * 2;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000;

const PriceRangeSlider = () => {
	const [leftValue, setLeftValue] = useState(MIN_PRICE);
	const [rightValue, setRightValue] = useState(MAX_PRICE);

	const handleChangeLeft = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		const newLeftValue = Math.min(Number(value), rightValue - DISTANCE_MIN_MAX);
		setLeftValue(newLeftValue);
	};
	const handleChangeRight = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		const newRightalue = Math.max(Number(value), leftValue + DISTANCE_MIN_MAX);
		setRightValue(newRightalue);
	};

	const leftPercent = ((leftValue - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
	const rightPercent = ((rightValue - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

	return (
		<StyledPriceRangeSlider>
			<HiddenInput
				type="range"
				min={MIN_PRICE}
				max={MAX_PRICE}
				step={PRICE_UNIT}
				onChange={handleChangeLeft}
				value={leftValue}
			/>
			<HiddenInput
				type="range"
				min={MIN_PRICE}
				max={MAX_PRICE}
				step={PRICE_UNIT}
				onChange={handleChangeRight}
				value={rightValue}
			/>
			<Slider>
				<LeftThumb left={leftPercent}>𑫨</LeftThumb>
				<RightThumb right={rightPercent}>𑫨</RightThumb>
			</Slider>
		</StyledPriceRangeSlider>
	);
};

export default PriceRangeSlider;

// import { StyledRange } from "./PriceDetail.styled";
import { useState } from "react";
import styled, { css } from "styled-components";
import { PauseCircleButton } from "util/Icons";

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
		width: 30px;
		height: 30px;
		-webkit-appearance: none;
		pointer-events: all;
	}
`;

const Slider = styled.div`
	position: relative;
	z-index: 1;
	height: 10px;
`;

const Track = styled.div`
	position: absolute;
	z-index: 1;
	width: 100%;
`;

const Range = styled.div<{ [key in string]: number }>`
	${({ left, right }) => css`
		left: ${left}%;
		right: ${100 - right}%;
	`}
	position: absolute;
	z-index: 2;
	top: 0;
	bottom: 0;
`;

const LeftThumb = styled.div<{ left: number }>`
	${({ left }) => css`
		left: ${left}%;
	`}
	position: absolute;
	z-index: 3;
	transform: translate(-10px, -10px);
`;

const RightThumb = styled.div<{ right: number }>`
	${({ right }) => css`
		right: ${100 - right}%;
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

	const handleChangeLeft = ({ target: { value } }) => {
		const newLeftValue = Math.min(value, rightValue - DISTANCE_MIN_MAX);
		setLeftValue(newLeftValue);
	};
	const handleChangeRight = ({ target: { value } }) => {
		const newRightalue = Math.max(value, leftValue + DISTANCE_MIN_MAX);
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
				<Track />
				<Range left={leftPercent} right={rightPercent} />
				<LeftThumb left={leftPercent}>
					<PauseCircleButton colorset="grey2" size={20} />
				</LeftThumb>
				<RightThumb right={rightPercent}>
					<PauseCircleButton colorset="grey2" size={20} />
				</RightThumb>
			</Slider>
		</StyledPriceRangeSlider>
	);
};

export default PriceRangeSlider;

import { useState, ChangeEvent } from "react";
import {
	StyledPriceRangeSlider,
	HiddenInput,
	Slider,
	LeftThumb,
	RightThumb,
} from "./PriceRangeSlider.styled";

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

import { useContext, ChangeEvent } from "react";

import { PriceDispatchContext, PriceContext } from "Context/PriceContext";
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
	const { min, max } = useContext(PriceContext);
	const priceDispatch = useContext(PriceDispatchContext);

	const handleChangeLeft = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		const newLeftValue = Math.min(Number(value), max - DISTANCE_MIN_MAX);
		priceDispatch({ value: { min: newLeftValue }, type: "EDIT" });
	};

	const handleChangeRight = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		const newRightValue = Math.max(Number(value), min + DISTANCE_MIN_MAX);
		priceDispatch({ value: { max: newRightValue }, type: "EDIT" });
	};

	const leftPercent = ((min - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
	const rightPercent = ((max - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

	return (
		<StyledPriceRangeSlider>
			<HiddenInput
				type="range"
				min={MIN_PRICE}
				max={MAX_PRICE}
				step={PRICE_UNIT}
				onChange={handleChangeLeft}
				value={min}
			/>
			<HiddenInput
				type="range"
				min={MIN_PRICE}
				max={MAX_PRICE}
				step={PRICE_UNIT}
				onChange={handleChangeRight}
				value={max}
			/>
			<Slider>
				<LeftThumb left={leftPercent}>𑫨</LeftThumb>
				<RightThumb right={rightPercent}>𑫨</RightThumb>
			</Slider>
		</StyledPriceRangeSlider>
	);
};

export default PriceRangeSlider;

import { useEffect, useRef } from "react";

import { PRICE_UNIT, MAX_PRICE } from "util/util";
import { CanvasWrapper, StyledCanvas } from "./PriceGraph.styled";
import PriceRangeSlider from "./PriceRangeSlider/PriceRangeSlider";

const DEVIDED_UNIT = MAX_PRICE / PRICE_UNIT;
const CANVAS_HEIGHT = 100;

type pricesType = {
	[key in number]: number;
};

const PriceGraph = ({ prices, min, max }: { prices: pricesType; min: number; max: number }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const minIndex = min / PRICE_UNIT;
	const maxIndex = max / PRICE_UNIT;

	const draw = () => {
		const canvas = canvasRef.current;
		if (canvas == null) throw new Error("Could not get canvas");

		const ctx = canvas.getContext("2d");
		if (ctx == null) throw new Error("Could not get ctx");

		const devidedWidthUnit = ctx.canvas.width / DEVIDED_UNIT;
		canvas.height = CANVAS_HEIGHT;

		const getYPoint = (i: number) => {
			const heightPerCount = CANVAS_HEIGHT / 10;
			const heightDefualt = CANVAS_HEIGHT / 100;
			const reversedY = prices[PRICE_UNIT * i]
				? prices[PRICE_UNIT * i] * heightPerCount
				: heightDefualt;
			const YPoint = CANVAS_HEIGHT - reversedY;

			return YPoint;
		};

		let prevX = 0;
		let prevY = getYPoint(0);

		ctx.beginPath();
		ctx.moveTo(0, ctx.canvas.height);
		ctx.lineTo(prevX, prevY);

		for (let i = 1; i <= DEVIDED_UNIT; i += 1) {
			const isBetween = i > minIndex && i <= maxIndex;
			const nextX = devidedWidthUnit * i;
			const nextY = getYPoint(i);
			const gapBetweenX = devidedWidthUnit / 2;

			ctx.fillStyle = isBetween ? "#333333" : "#E5E5E5";
			ctx.strokeStyle = isBetween ? "#333333" : "#E5E5E5";
			ctx.bezierCurveTo(prevX + gapBetweenX, prevY, nextX - gapBetweenX, nextY, nextX, nextY);
			ctx.lineTo(nextX, ctx.canvas.height);
			ctx.stroke();
			ctx.fill();

			ctx.beginPath();
			ctx.moveTo(nextX, ctx.canvas.height);
			ctx.lineTo(nextX, nextY);

			prevX = nextX;
			prevY = nextY;
		}

		ctx.lineTo(ctx.canvas.width, ctx.canvas.height);
		ctx.stroke();
		ctx.fill();
	};

	useEffect(() => {
		draw();
	}, [min, max]);

	return (
		<CanvasWrapper>
			<StyledCanvas ref={canvasRef} />
			<PriceRangeSlider />
		</CanvasWrapper>
	);
};

export default PriceGraph;

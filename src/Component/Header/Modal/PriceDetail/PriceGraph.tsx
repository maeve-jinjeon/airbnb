import { useEffect, useRef } from "react";

import { CanvasWrapper, StyledCanvas } from "./PriceDetail.styled";
import PriceRangeSlider from "./PriceRangeSlider";

const PRICE_UNIT = 50000;
const MAX_PRICE = 1000000;
const DEVIDED_UNIT = MAX_PRICE / PRICE_UNIT;
const CANVAS_HEIGHT = 100;

type pricesType = {
	[key in number]: number;
};

const PriceGraph = ({ prices }: { prices: pricesType }) => {
	const canvasRef = useRef({ current: null });

	const draw = () => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
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

		ctx.fillStyle = "#4F4F4F";
		ctx.beginPath();
		ctx.moveTo(0, ctx.canvas.height);

		let prevX = 0;
		let prevY = getYPoint(0);

		ctx.lineTo(prevX, prevY);
		for (let i = 1; i <= DEVIDED_UNIT; i += 1) {
			const nextX = devidedWidthUnit * i;
			const nextY = getYPoint(i);
			const gapBetweenX = devidedWidthUnit / 2;
			ctx.bezierCurveTo(prevX + gapBetweenX, prevY, nextX - gapBetweenX, nextY, nextX, nextY);

			prevX = nextX;
			prevY = nextY;
		}

		ctx.lineTo(ctx.canvas.width, ctx.canvas.height);
		ctx.stroke();
		ctx.fill();
	};

	useEffect(() => {
		draw();
	}, []);

	return (
		<CanvasWrapper>
			<StyledCanvas ref={canvasRef} />

			<PriceRangeSlider />
		</CanvasWrapper>
	);
};

export default PriceGraph;

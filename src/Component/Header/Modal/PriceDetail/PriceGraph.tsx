import { useEffect, useRef } from "react";

import { CanvasWrapper, StyledCanvas, StyledRange } from "./PriceDetail.styled";

const PRICE_UNIT = 50000;
const MAX_PRICE = 1000000;
const DEVIDED_UNIT = MAX_PRICE / PRICE_UNIT;
const CANVAS_HEIGHT = 100;

type pricesType = {
	[key in number]: number;
};

const PriceGraph = ({ prices }: { prices: pricesType }) => {
	const canvasRef = useRef(null);

	const draw = () => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		const devidedWidthUnit = ctx.canvas.width / DEVIDED_UNIT;

		canvas.height = CANVAS_HEIGHT;

		const getYPoint = (i: number) => {
			const heightPerCount = CANVAS_HEIGHT / 10;
			const heightDefualt = CANVAS_HEIGHT / 50;
			const reversedY = prices[PRICE_UNIT * i]
				? prices[PRICE_UNIT * i] * heightPerCount
				: heightDefualt;
			return CANVAS_HEIGHT - reversedY;
		};

		ctx.fillStyle = "#333333";
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
			<StyledRange type="range" min="0" max={`${MAX_PRICE}`} step={PRICE_UNIT} />
		</CanvasWrapper>
	);
};

export default PriceGraph;

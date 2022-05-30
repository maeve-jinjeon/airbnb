import { useEffect, useRef } from "react";

import { CanvasWrapper, StyledCanvas, StyledRange } from "./PriceDetail.styled";

const PRICE_UNIT = 50000;
const DEVIDED_UNIT = 1000000 / PRICE_UNIT;
const CANVAS_HEIGHT = 100;

type pricesType =
	| {
			[key in number]: number;
	  }
	| undefined;

const PriceGraph = ({ prices }: { prices: pricesType }) => {
	const canvasRef = useRef(null);

	const draw = () => {
		const canvas = canvasRef.current;
		canvas.height = CANVAS_HEIGHT;

		const ctx = canvas.getContext("2d");
		const devidedWidthUnit = ctx.canvas.width / DEVIDED_UNIT;

		const getYPoint = (i) => {
			const reversedY = prices[PRICE_UNIT * i] ? prices[PRICE_UNIT * i] * 15 : 5;
			return CANVAS_HEIGHT - reversedY;
		};

		ctx.fillStyle = "#333333";
		ctx.beginPath();
		ctx.moveTo(0, ctx.canvas.height);

		for (let i = 0; i <= DEVIDED_UNIT; i += 1) {
			ctx.lineTo(devidedWidthUnit * i, getYPoint(i));
		}

		ctx.lineTo(300, 100);
		ctx.stroke();
		ctx.fill();
	};

	useEffect(() => {
		draw();
	}, []);

	return (
		<CanvasWrapper>
			<StyledCanvas ref={canvasRef} />
			<StyledRange type="range" min="0" max="1000000" step={PRICE_UNIT} />
		</CanvasWrapper>
	);
};

export default PriceGraph;

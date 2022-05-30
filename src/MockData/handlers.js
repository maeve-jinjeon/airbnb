import { rest } from "msw";
import hotelsData from "./data";

const getHotelsPrices = (hotels) => {
	const sum = hotels.reduce((prev, { price }) => prev + price, 0);
	const min = hotels.reduce((prev, { price }) => (prev <= price ? prev : price));
	const max = hotels.reduce((prev, { price }) => (prev >= price ? prev : price));
	const avg = Math.round(sum / (hotels.length - 1) / 100) * 100;
	return { min, max, avg };
};

const handlers = [
	rest.get(`/api/prices`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.delay(100), ctx.json(getHotelsPrices(hotelsData)));
	}),
];

export default handlers;

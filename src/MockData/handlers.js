import { rest } from "msw";
import hotelsData from "./data";

const priceUnit = 50000;

const changePricePerUnit = (price, unitForDevide) => {
	const devidedPrice = price - (price % unitForDevide) + unitForDevide;
	return devidedPrice;
};

const getHotelsPrices = (hotels) => {
	const sum = hotels.reduce((prev, { price }) => prev + price, 0);
	const min = hotels.reduce((prev, { price }) => (prev <= price ? prev : price));
	const max = hotels.reduce((prev, { price }) => (prev >= price ? prev : price));
	const avg = Math.round(sum / (hotels.length - 1) / 100) * 100;
	const prices = {};

	hotels.forEach(({ price }) => {
		const changedPrice = changePricePerUnit(price, priceUnit);
		if (price >= 1000000) {
			prices[1000000] = prices[1000000] ? prices[1000000] + 1 : 1;
			return;
		}
		prices[changedPrice] = prices[changedPrice] ? prices[changedPrice] + 1 : 1;
	});

	return { min, max, avg, prices };
};

const handlers = [
	rest.get(`/api/prices`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.delay(100), ctx.json(getHotelsPrices(hotelsData)));
	}),
];

export default handlers;

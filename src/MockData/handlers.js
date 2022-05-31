import { rest } from "msw";
import hotelsData from "./data";
import getHotelsPrices from "./controllers";

const handlers = [
	rest.get(`/api/prices`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.delay(100), ctx.json(getHotelsPrices(hotelsData)));
	}),
];

export default handlers;

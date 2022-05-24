import { rest } from "msw";
import testData from "./data";

const handlers = [
	rest.get(`/api/test`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.delay(100), ctx.json(testData));
	}),
];

export default handlers;

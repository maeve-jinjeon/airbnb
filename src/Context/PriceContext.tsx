import { createContext, ReactNode, useReducer, useEffect, Dispatch } from "react";
import hotelsPricesApi from "Api/hotelsPricesApi";

type pricesType = {
	[key in number]: number;
};

type priceType = {
	min: number;
	max: number;
	avg: number;
	prices: pricesType;
};

type priceDispatchValueType = {
	min?: number;
	max?: number;
	avg?: number;
	prices?: pricesType;
};

type priceDispatchAction = {
	value: priceDispatchValueType;
	type: "EDIT" | "RESET";
};

type priceDispatchType = Dispatch<priceDispatchAction>;

const defaultMin = 0;
const defaultMax = 1000000;
const priceDefault = { min: defaultMin, max: defaultMax, avg: 0, prices: {} };
const PriceContext = createContext<priceType>(priceDefault);
const PriceDispatchContext = createContext<priceDispatchType>(() => null);

const getPricesAvg = (pricesObj: pricesType, min: number, max: number) => {
	let priceSum = 0;
	let count = 0;
	const prices = Object.keys(pricesObj);

	prices.forEach((price) => {
		const targetPrice = Number(price);
		const targetCount = pricesObj[targetPrice];

		if (targetPrice > min && targetPrice <= max) {
			priceSum += targetPrice * targetCount;
			count += targetCount;
		}
	});

	const avg = Math.round(priceSum / count / 100) * 100;
	return avg;
};

const priceReducer = (price: priceType, action: priceDispatchAction) => {
	const { value, type } = action;

	switch (type) {
		case "EDIT": {
			const newPrice = { ...price, ...value };
			const { min, max, prices } = newPrice;
			const avg = getPricesAvg(prices, min, max);
			newPrice.avg = avg;

			return newPrice;
		}
		case "RESET": {
			return priceDefault;
		}
		default: {
			return { ...price };
		}
	}
};

const PriceProvider = ({ inner }: { inner: ReactNode }) => {
	const [price, priceDispatch] = useReducer(priceReducer, priceDefault);

	const fetchhotelsPrices = async () => {
		const hotelsPrices = await hotelsPricesApi.getHotelsPrices();
		const { avg, prices } = hotelsPrices;
		priceDefault.avg = avg;
		priceDefault.prices = prices;
		priceDispatch({ value: { ...hotelsPrices }, type: "RESET" });
	};

	useEffect(() => {
		fetchhotelsPrices();
	}, []);

	return (
		<PriceContext.Provider value={price}>
			<PriceDispatchContext.Provider value={priceDispatch}>{inner}</PriceDispatchContext.Provider>
		</PriceContext.Provider>
	);
};

export { PriceContext, PriceDispatchContext, PriceProvider };

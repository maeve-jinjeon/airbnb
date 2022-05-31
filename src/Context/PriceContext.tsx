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

const priceDefault = { min: 10000, max: 1000000, avg: 505000, prices: {} };
const PriceContext = createContext<priceType>(priceDefault);
const PriceDispatchContext = createContext<priceDispatchType>(() => null);

const priceReducer = (price: priceType, action: priceDispatchAction) => {
	const { value, type } = action;

	switch (type) {
		case "EDIT":
			return { ...price, ...value };
		case "RESET":
			return priceDefault;
		default:
			return { ...price };
	}
};

const PriceProvider = ({ inner }: { inner: ReactNode }) => {
	const [price, priceDispatch] = useReducer(priceReducer, priceDefault);

	const fetchhotelsPrices = async () => {
		const hotelsPrices = await hotelsPricesApi.getHotelsPrices();
		priceDispatch({ value: { ...hotelsPrices }, type: "EDIT" });
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

import { createContext, ReactNode, useReducer, Dispatch } from "react";

type priceType = {
	min: number;
	max: number;
};

type priceDispatchAction = {
	target: "min" | "max";
	value: number;
	type: "EDIT" | "RESET";
};

type priceDispatchType = Dispatch<priceDispatchAction>;

const priceDefault = { min: 0, max: 1000000 };
const PriceContext = createContext<priceType>(priceDefault);
const PriceDispatchContext = createContext<priceDispatchType>(() => null);

const priceReducer = (price: priceType, action: priceDispatchAction) => {
	const newPrice = { ...price };
	const { target, value, type } = action;

	switch (type) {
		case "EDIT":
			newPrice[target] = value;
			return newPrice;
		case "EDIT":
			return priceDefault;
	}

	return newPrice;
};

const PriceProvider = ({ inner }: { inner: ReactNode }) => {
	const [price, priceDispatch] = useReducer(priceReducer, priceDefault);

	return (
		<PriceContext.Provider value={price}>
			<PriceDispatchContext.Provider value={priceDispatch}>{inner}</PriceDispatchContext.Provider>
		</PriceContext.Provider>
	);
};

export { PriceContext, PriceDispatchContext, PriceProvider };

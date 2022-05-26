import { createContext, ReactNode, useReducer, Dispatch, useMemo } from "react";

type ProviderProp = {
	inner: ReactNode;
};

type guestType = {
	adult: number;
	child: number;
	baby: number;
};

type guestsDispatchAction = {
	guest: "adult" | "child" | "baby";
	type: 0 | 1;
};

type GuestsContextProps = {
	guests: guestType;
	guestsDispatch: Dispatch<guestsDispatchAction>;
};

const guestsDefault: guestType = { adult: 0, child: 0, baby: 0 };
const GuestsContext = createContext<GuestsContextProps>({
	guests: guestsDefault,
	guestsDispatch: () => null,
});

const guestsReducer = (guests: guestType, action: guestsDispatchAction) => {
	console.log("reducer");
	const { guest, type } = action;
	const newGuests = { ...guests };

	switch (type) {
		case 0:
			newGuests[guest] -= 1;
			break;
		case 1:
			newGuests[guest] += 1;
			break;
		default:
	}

	return newGuests;
};

const GuestsProvider = ({ inner }: ProviderProp) => {
	const [guests, guestsDispatch] = useReducer(guestsReducer, guestsDefault);
	const value: GuestsContextProps = useMemo(() => {
		return { guests, guestsDispatch };
	}, []);

	return <GuestsContext.Provider value={value}>{inner}</GuestsContext.Provider>;
};

export { GuestsProvider, GuestsContext };

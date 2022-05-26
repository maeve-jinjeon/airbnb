import { createContext, Dispatch, useReducer, ReactNode } from "react";

type guestsType = {
	adult: number;
	child: number;
	baby: number;
};

type guestType = "adult" | "child" | "baby";

type guestsDispatchAction = {
	guest: guestType;
	type: 0 | 1;
};

type guestsDispatchType = Dispatch<guestsDispatchAction>;

const guestsDefault = { adult: 0, child: 0, baby: 0 };
const GuestsContext = createContext<guestsType>(guestsDefault);
const GuestsDispatchContext = createContext<guestsDispatchType>(() => null);

const guestsReducer = (guests: guestsType, action: guestsDispatchAction) => {
	const { guest, type } = action;
	const newGuests = { ...guests };

	switch (type) {
		case 0:
			if (newGuests[guest] > 0) newGuests[guest] -= 1;
			break;
		case 1:
			if (newGuests[guest] < 8) newGuests[guest] += 1;
			break;
		default:
	}

	const { adult, child, baby } = newGuests;
	if (!adult && child + baby) newGuests.adult += 1;

	return newGuests;
};

const GuestsProvider = ({ inner }: { inner: ReactNode }) => {
	const [guests, guestsDispatch] = useReducer(guestsReducer, guestsDefault);

	return (
		<GuestsContext.Provider value={guests}>
			<GuestsDispatchContext.Provider value={guestsDispatch}>
				{inner}
			</GuestsDispatchContext.Provider>
		</GuestsContext.Provider>
	);
};

export { GuestsProvider, GuestsContext, GuestsDispatchContext };

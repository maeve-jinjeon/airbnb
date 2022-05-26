import { createContext, Dispatch, useReducer } from "react";

import { RemoveCircleButton, AddCircleButton } from "util/Icons";
import { StyledGuestList, StyledGuestDesc, StyledGuestBtns } from "./Modal.styled";

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

type guestsOptionType = {
	id: number;
	name: string;
	guest: guestType;
	desc: string;
	state: number;
};

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

const GuestsDatail = () => {
	const [guests, guestsDispatch] = useReducer(guestsReducer, guestsDefault);
	const { adult, child, baby } = guests;

	const guestsOptions: guestsOptionType[] = [
		{ id: 1, name: "성인", guest: "adult", desc: "만 13세 이상", state: adult },
		{ id: 2, name: "어린이", guest: "child", desc: "만 2~12세", state: child },
		{ id: 3, name: "유아", guest: "baby", desc: "만 2세 이상", state: baby },
	];

	const guestsLists = guestsOptions.map(({ id, name, guest, desc, state }) => {
		const decrease = () => guestsDispatch({ guest, type: 0 });
		const increase = () => guestsDispatch({ guest, type: 1 });

		return (
			<StyledGuestList key={id}>
				<StyledGuestDesc>
					<div>{name}</div>
					<div>{desc}</div>
				</StyledGuestDesc>
				<StyledGuestBtns>
					<RemoveCircleButton
						onClick={decrease}
						colorset={state === 0 ? "grey5" : "grey3"}
						size={30}
					/>
					<div>{state}</div>
					<AddCircleButton
						onClick={increase}
						colorset={state === 8 ? "grey5" : "grey3"}
						size={30}
					/>
				</StyledGuestBtns>
			</StyledGuestList>
		);
	});

	return (
		<GuestsContext.Provider value={guests}>
			<GuestsDispatchContext.Provider value={guestsDispatch}>
				{guestsLists}
			</GuestsDispatchContext.Provider>
		</GuestsContext.Provider>
	);
};

export default GuestsDatail;

import { useContext } from "react";

import { RemoveCircleButton, AddCircleButton } from "util/Icons";
import { GuestsContext, GuestsDispatchContext } from "Context/GuestsContext";
import { StyledGuestList, StyledGuestDesc, StyledGuestBtns } from "./Modal.styled";

type guestType = "adult" | "child" | "baby";

type guestsOptionType = {
	id: number;
	name: string;
	guest: guestType;
	desc: string;
	state: number;
};

const GuestsDatail = () => {
	const guests = useContext(GuestsContext);
	const guestsDispatch = useContext(GuestsDispatchContext);

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

	return <div>{guestsLists}</div>;
};

export default GuestsDatail;

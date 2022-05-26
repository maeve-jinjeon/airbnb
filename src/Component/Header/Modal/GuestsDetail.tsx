import { useContext } from "react";

import { RemoveCircleButton, AddCircleButton } from "util/Icons";
import { StyledGuestList, StyledGuestDesc, StyledGuestBtns } from "./Modal.styled";
import { GuestsProvider, GuestsContext } from "./GuestsContext";

interface IOption {
	id: number;
	name: string;
	guest: "adult" | "child" | "baby";
	desc: string;
	state: number;
}

const GuestsDatail = () => {
	const { guests, guestsDispatch } = useContext(GuestsContext);
	const { adult, child, baby } = guests;

	const guestsOptions: IOption[] = [
		{ id: 1, name: "성인", guest: "adult", desc: "만 13세 이상", state: adult },
		{ id: 2, name: "어린이", guest: "child", desc: "만 2~12세", state: child },
		{ id: 3, name: "유아", guest: "baby", desc: "만 2세 이상", state: baby },
	];

	const guestsLists = guestsOptions.map(({ id, name, guest, desc, state }) => (
		<StyledGuestList key={id}>
			<StyledGuestDesc>
				<div>{name}</div>
				<div>{desc}</div>
			</StyledGuestDesc>
			<StyledGuestBtns>
				<RemoveCircleButton
					onClick={() => {
						console.log("hi");
						guestsDispatch({ type: 0, guest });
					}}
					colorset="grey3"
					size={30}
				/>
				<div>{state}</div>
				<AddCircleButton colorset="grey3" size={30} />
			</StyledGuestBtns>
		</StyledGuestList>
	));

	return <GuestsProvider inner={guestsLists} />;
};

export default GuestsDatail;

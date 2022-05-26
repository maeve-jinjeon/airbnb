import { useContext } from "react";
import { GuestsContext } from "Context/GuestsContext";
import { CancelButton } from "util/Icons";
import StyledGuest from "./Guest.styled";
import { StyledSearchBarChild } from "../SearchBar.styled";

const Guest = () => {
	const name = "guest";
	const { adult, child, baby } = useContext(GuestsContext);
	const sum = adult + child + baby;
	const mention = `게스트 ${adult + child}명, 유아 ${baby}명`;

	return (
		<StyledGuest>
			<StyledSearchBarChild name={name}>
				<div>인원</div>
				<div>{sum ? mention : "게스트 추가"}</div>
			</StyledSearchBarChild>
			<CancelButton colorset="grey3" size={20} />
		</StyledGuest>
	);
};

// 0 명일 때 게스트 추가 / 게스트 adult + child 명, 유아 baby 명

export default Guest;

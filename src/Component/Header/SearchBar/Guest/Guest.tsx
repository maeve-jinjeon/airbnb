import { useContext } from "react";
import { CancelButton } from "util/Icons";
import { GuestsContext, GuestsDispatchContext } from "Context/GuestsContext";
import { CheckModalContext } from "Context/modalContext";
import StyledGuest from "./Guest.styled";
import { StyledSearchBarChild } from "../SearchBar.styled";

const Guest = () => {
	const modalState = "guest";
	const guests = useContext(GuestsContext);
	const { adult, child, baby } = guests;
	const checkModal = useContext(CheckModalContext);
	const guestsDispatch = useContext(GuestsDispatchContext);
	const sum = adult + child + baby;
	const mention = `게스트 ${adult + child}명, 유아 ${baby}명`;
	const reset = () => guestsDispatch({ guest: "adult", type: "reset" });
	// TODO : guest 기본값 설정하기

	return (
		<StyledGuest>
			<StyledSearchBarChild onClick={() => checkModal(modalState)} name={modalState}>
				<div>인원</div>
				<div>{sum ? mention : "게스트 추가"}</div>
			</StyledSearchBarChild>
			<CancelButton onClick={reset} colorset="grey3" size={20} hover={true} />
		</StyledGuest>
	);
};

export default Guest;

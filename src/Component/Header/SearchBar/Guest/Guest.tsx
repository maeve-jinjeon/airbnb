import { CancelButton } from "util/Icons";
import StyledGuest from "./Guest.styled";
import { StyledSearchBarChild } from "../SearchBar.styled";

const Guest = () => {
	const name: string = "guest";
	return (
		<StyledGuest>
			<StyledSearchBarChild name={name}>
				<div>인원</div>
				<div>게스트 추가</div>
			</StyledSearchBarChild>
			<CancelButton colorSet="grey3" size={20} />
		</StyledGuest>
	);
};

export default Guest;

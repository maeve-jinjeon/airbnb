import { CancelButton } from "util/Icons";
import StyledPrice from "./Price.styled";
import { StyledSearchBarChild } from "../SearchBar.styled";

const Price = () => {
	const name: string = "price";

	return (
		<StyledPrice>
			<StyledSearchBarChild name={name}>
				<div>요금</div>
				<div>금액대 설정</div>
			</StyledSearchBarChild>
			<CancelButton color="grey3" size={20} />
		</StyledPrice>
	);
};

export default Price;

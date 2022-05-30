import { useContext } from "react";

import { CheckModalContext } from "Context/modalContext";
import { CancelButton } from "util/Icons";
import StyledPrice from "./Price.styled";
import { StyledSearchBarChild } from "../SearchBar.styled";

const Price = () => {
	const checkModal = useContext(CheckModalContext);
	const modalState = "price";

	return (
		<StyledPrice>
			<StyledSearchBarChild onClick={() => checkModal(modalState)} name={modalState}>
				<div>요금</div>
				<div>금액대 설정</div>
			</StyledSearchBarChild>
			<CancelButton colorset="grey3" size={20} />
		</StyledPrice>
	);
};

export default Price;

import { StyledMiniSearchBarChild } from "../MiniSearchBar.styled";
import StyledMiniPrice from "./MiniPrice.styled";

const MiniPrice = () => {
	const name = "miniPrice";

	return (
		<StyledMiniPrice>
			<StyledMiniSearchBarChild name={name}>₩100,000 ~ 1,000,000</StyledMiniSearchBarChild>{" "}
		</StyledMiniPrice>
	);
};

export default MiniPrice;

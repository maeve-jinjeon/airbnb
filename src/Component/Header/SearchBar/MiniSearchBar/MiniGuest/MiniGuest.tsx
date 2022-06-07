import { StyledMiniSearchBarChild } from "../MiniSearchBar.styled";
import StyledMiniGuest from "./MiniGuest.styled";

const MiniGuest = () => {
	const name = "miniGuest";
	return (
		<StyledMiniGuest>
			<StyledMiniSearchBarChild name={name}>게스트 3명</StyledMiniSearchBarChild>
		</StyledMiniGuest>
	);
};

export default MiniGuest;

import { StyledMiniSearchBarChild } from "../MiniSearchBar.styled";
import StyledMiniSchedule from "./MiniSchedule.styled";

const MiniSchedule = () => {
	const name = "miniSchedule";

	return (
		<StyledMiniSchedule>
			<StyledMiniSearchBarChild name={name}>5월 17일 ~ 6월 4일</StyledMiniSearchBarChild>
		</StyledMiniSchedule>
	);
};

export default MiniSchedule;

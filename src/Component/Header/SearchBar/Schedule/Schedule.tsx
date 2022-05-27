import { CancelButton } from "util/Icons";
import StyledSchedule from "./Schedule.styled";
import { StyledSearchBarChild } from "../SearchBar.styled";

const Schedule = () => {
	const name: string = "schedule";

	return (
		<StyledSchedule>
			<StyledSearchBarChild name={name}>
				<div>체크인</div>
				<div>날짜 입력</div>
			</StyledSearchBarChild>
			<StyledSearchBarChild name={name}>
				<div>체크아웃</div>
				<div>날짜 입력</div>
			</StyledSearchBarChild>
			<CancelButton colorset="grey3" size={20} />
		</StyledSchedule>
	);
};

export default Schedule;

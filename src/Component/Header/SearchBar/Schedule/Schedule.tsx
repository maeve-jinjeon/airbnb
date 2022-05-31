import { useContext } from "react";
import { CancelButton } from "util/Icons";
import { CheckModalContext } from "Context/modalContext";
import StyledSchedule from "./Schedule.styled";
import { StyledSearchBarChild } from "../SearchBar.styled";

const Schedule = () => {
	const modalState = "schedule";
	const checkModal = useContext(CheckModalContext);

	return (
		<StyledSchedule>
			<StyledSearchBarChild onClick={() => checkModal(modalState)} name={modalState}>
				<div>체크인</div>
				<div>날짜 입력</div>
			</StyledSearchBarChild>
			<StyledSearchBarChild name={modalState}>
				<div>체크아웃</div>
				<div>날짜 입력</div>
			</StyledSearchBarChild>
			<CancelButton colorset="grey3" size={20} />
		</StyledSchedule>
	);
};

export default Schedule;

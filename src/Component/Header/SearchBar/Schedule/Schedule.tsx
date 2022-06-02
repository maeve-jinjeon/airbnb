import { useContext } from "react";
import { CancelButton } from "util/Icons";
import { CheckModalContext, ScheduleContext, ScheduleDispatchContext } from "Context";
import StyledSchedule from "./Schedule.styled";
import { StyledSearchBarChild } from "../SearchBar.styled";

const Schedule = () => {
	const modalStateCheckin = "checkin";
	const modalStateCheckout = "checkout";
	const name = "schedule";
	const checkModal = useContext(CheckModalContext);
	const { checkin, checkout } = useContext(ScheduleContext);
	const scheduleDispatch = useContext(ScheduleDispatchContext);

	return (
		<StyledSchedule>
			<StyledSearchBarChild onClick={() => checkModal(modalStateCheckin)} name={name}>
				<div>체크인</div>
				<div>{checkin.year ? `${checkin.month}월${checkin.date}일` : "날짜 입력"}</div>
			</StyledSearchBarChild>
			<StyledSearchBarChild onClick={() => checkModal(modalStateCheckout)} name={name}>
				<div>체크아웃</div>
				<div>{checkout.year ? `${checkout.month}월${checkout.date}일` : "날짜 입력"}</div>
			</StyledSearchBarChild>
			<CancelButton
				colorset="grey3"
				size={20}
				onClick={() => scheduleDispatch({ dayInfo: { year: 0, month: 0, date: 0 }, type: "RESET" })}
				hover="true"
			/>
		</StyledSchedule>
	);
};

export default Schedule;

import { useState } from "react";
import { StyledCalendars, CalendarsWrapper } from "./CalendarDetail.styled";
import Calendar from "./Calendar/Calendar";

const CalendarDetail = () => {
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();
	const [thisYear, setThisYear] = useState(currentYear);
	const [thisMonth, setThisMonth] = useState(currentMonth);

	const showPrevMonths = () => {
		if (thisMonth - 2 < 0) {
			setThisYear(thisYear - 1);
			setThisMonth(thisMonth + 10);
		} else {
			setThisMonth(thisMonth - 2);
		}
	};

	const showNextMonths = () => {
		if (thisMonth + 2 >= 12) {
			setThisYear(thisYear + 1);
			setThisMonth(thisMonth - 10);
		} else {
			setThisMonth(thisMonth + 2);
		}
	};

	const changeDates = (direction: "prev" | "next") => {
		if (direction === "prev") showPrevMonths();
		if (direction === "next") showNextMonths();
	};

	return (
		<CalendarsWrapper>
			<StyledCalendars>
				<Calendar title="prev" year={thisYear} month={thisMonth} changeDates={changeDates} />
				<Calendar title="next" year={thisYear} month={thisMonth + 1} changeDates={changeDates} />
				<Calendar title="prev" year={thisYear} month={thisMonth} changeDates={changeDates} />
				<Calendar title="next" year={thisYear} month={thisMonth + 1} changeDates={changeDates} />
			</StyledCalendars>
		</CalendarsWrapper>
	);
};

export default CalendarDetail;

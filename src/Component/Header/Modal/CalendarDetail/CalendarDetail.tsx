import { useState, useRef } from "react";
import { StyledCalendars, CalendarsWrapper } from "./CalendarDetail.styled";
import Calendar from "./Calendar/Calendar";

type TCalendar = {
	title: string;
	addedMonth: number;
};

type TCalendarInfo = {
	[key in string]: TCalendar[];
};

const calendarsInfo: TCalendarInfo = {
	prev: [
		{ title: "prev", addedMonth: 0 },
		{ title: "next", addedMonth: 1 },
		{ title: "null", addedMonth: 2 },
		{ title: "null", addedMonth: 3 },
	],
	next: [
		{ title: "null", addedMonth: -2 },
		{ title: "null", addedMonth: -1 },
		{ title: "prev", addedMonth: 0 },
		{ title: "next", addedMonth: 1 },
	],
	middle: [
		{ title: "prev", addedMonth: 0 },
		{ title: "next", addedMonth: 1 },
		{ title: "null", addedMonth: 2 },
		{ title: "null", addedMonth: 3 },
	],
};

const CalendarDetail = () => {
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();
	const [thisYear, setThisYear] = useState(currentYear);
	const [thisMonth, setThisMonth] = useState(currentMonth);
	const [sliderState, setSliderState] = useState("middle");
	const sliderRef = useRef<HTMLDivElement>(null);

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
		setSliderState(direction);
	};

	const calendars = calendarsInfo[sliderState].map(({ title, addedMonth }) => (
		<Calendar
			title={title}
			year={thisYear}
			month={thisMonth + addedMonth}
			changeDates={changeDates}
		/>
	));

	return (
		<CalendarsWrapper>
			<StyledCalendars ref={sliderRef} sliderState={sliderState}>
				{calendars}
			</StyledCalendars>
		</CalendarsWrapper>
	);
};

export default CalendarDetail;

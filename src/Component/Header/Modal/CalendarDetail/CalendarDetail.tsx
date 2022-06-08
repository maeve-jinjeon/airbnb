import { useState } from "react";
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

const NUM_DECEMBER = 12;

const getNextMonthAndYear = (month: number, year: number, gap: number) => {
	let nextMonth = month;
	let nextYear = year;

	if (month + gap < 0) {
		nextMonth = NUM_DECEMBER + month + gap;
		nextYear -= 1;
	} else if (month + gap > NUM_DECEMBER) {
		nextMonth = month + gap - NUM_DECEMBER;
		nextYear += 1;
	} else {
		nextMonth += gap;
	}

	return { nextMonth, nextYear };
};

const CalendarDetail = () => {
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();
	const [thisYear, setThisYear] = useState(currentYear);
	const [thisMonth, setThisMonth] = useState(currentMonth);
	const [sliderState, setSliderState] = useState("middle");

	const showPrevMonths = () => {
		const { nextMonth, nextYear } = getNextMonthAndYear(thisMonth, thisYear, -2);
		setThisMonth(nextMonth);
		setThisYear(nextYear);
	};

	const showNextMonths = () => {
		const { nextMonth, nextYear } = getNextMonthAndYear(thisMonth, thisYear, 2);
		setThisMonth(nextMonth);
		setThisYear(nextYear);
	};

	const changeDates = (direction: "prev" | "next") => {
		if (direction === "prev") showPrevMonths();
		if (direction === "next") showNextMonths();
		setSliderState(direction);
	};

	const handleAnimationEnd = () => setSliderState("middle");

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
			<StyledCalendars sliderState={sliderState} onAnimationEnd={handleAnimationEnd}>
				{calendars}
			</StyledCalendars>
		</CalendarsWrapper>
	);
};

export default CalendarDetail;

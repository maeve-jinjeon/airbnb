import { StyledCalendarTitle } from "./Calendar.styled";

const CalendarTitle = ({ year, month }: { year: number; month: number }) => {
	const showedMonth = month >= 12 ? 1 : month + 1;
	const title = `${year}년 ${showedMonth}월`;

	return <StyledCalendarTitle>{title}</StyledCalendarTitle>;
};

export default CalendarTitle;

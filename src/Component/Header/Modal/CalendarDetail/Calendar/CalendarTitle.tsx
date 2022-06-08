import { getShowedMonth } from "util/util";
import { StyledCalendarTitle } from "./Calendar.styled";

const CalendarTitle = ({ year, month }: { year: number; month: number }) => {
	const showedMonth = getShowedMonth(month);
	const title = `${year}년 ${showedMonth}월`;

	return <StyledCalendarTitle>{title}</StyledCalendarTitle>;
};

export default CalendarTitle;

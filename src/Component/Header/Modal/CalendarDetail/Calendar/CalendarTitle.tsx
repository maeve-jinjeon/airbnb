import { StyledCalendarTitle } from "./Calendar.styled";

const CalendarTitle = ({ year, month }: { year: number; month: number }) => {
	const showedMonth = month > 12 ? 1 : month + 1;
	return (
		<StyledCalendarTitle>
			{year}년 {showedMonth}월
		</StyledCalendarTitle>
	);
};

export default CalendarTitle;

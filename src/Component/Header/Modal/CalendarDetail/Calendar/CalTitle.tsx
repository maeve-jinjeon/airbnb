import { CalendarTitle } from "../CalendarDetail.styled";

const CalTitle = ({ year, month }: { year: number; month: number }) => {
	const showedMonth = month > 12 ? 1 : month;
	return (
		<CalendarTitle>
			{year}년 {showedMonth}월
		</CalendarTitle>
	);
};

export default CalTitle;

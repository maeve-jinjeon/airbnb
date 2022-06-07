import { CalendarTitle } from "../CalendarDetail.styled";

const CalTitle = ({ year, month }: { year: number; month: number }) => {
	return (
		<CalendarTitle>
			{year}년 {month + 1}월
		</CalendarTitle>
	);
};

export default CalTitle;

import { PrevButton, NextButton } from "util/Icons";
import CalTitle from "./CalTitle";
import CalDayBox from "./CalDayBox";

const Calendar = ({
	title,
	year,
	month,
	changeDates,
}: {
	title: string;
	year: number;
	month: number;
	changeDates: any;
}) => {
	return (
		<>
			{title === "prev" && (
				<PrevButton onClick={() => changeDates(title)} colorset="black" size={16} />
			)}
			<CalTitle year={year} month={month} />
			{title === "next" && (
				<NextButton onClick={() => changeDates(title)} colorset="black" size={16} />
			)}
			<CalDayBox year={year} month={month} />
		</>
	);
};

export default Calendar;

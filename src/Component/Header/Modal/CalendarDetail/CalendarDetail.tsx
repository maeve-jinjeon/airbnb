import { PrevButton, NextButton } from "util/Icons";
import {
	VisibleDay,
	InvisibleDay,
	CalendarDayBox,
	CalendarLabel,
	CalendarTitle,
	StyledCalendar,
	StyledCalendars,
} from "./CalendarDetail.styled";

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

const days = [
	{ id: 0, value: "일" },
	{ id: 1, value: "월" },
	{ id: 2, value: "화" },
	{ id: 3, value: "수" },
	{ id: 4, value: "목" },
	{ id: 5, value: "금" },
	{ id: 6, value: "토" },
];

const getCalTitle = ({ year, month }: { year: number; month: number }) => {
	return (
		<CalendarTitle>
			{year}년 {month + 1}월
		</CalendarTitle>
	);
};

const getLabel = days.map((day) => <CalendarLabel key={day.id}>{day.value}</CalendarLabel>);

const getCalData = ({ year, month }: { year: number; month: number }) => {
	const currentDay = new Date(year, month, 1).getDay();
	const endDay = new Date(year, month + 1, 0);
	const nextDate = endDay.getDate();
	const nextDay = endDay.getDay();

	const calData = [];
	let calDataLength = 0;

	for (let i = 0; i < currentDay; i += 1) {
		calData.push({ id: calDataLength, value: 0 });
		calDataLength += 1;
	}

	for (let i = 1; i <= nextDate; i += 1) {
		calData.push({ id: calDataLength, value: i });
		calDataLength += 1;
	}

	for (let i = 1; i <= 6 - nextDay; i += 1) {
		calData.push({ id: calDataLength, value: 0 });
		calDataLength += 1;
	}

	return calData.map((day) =>
		day.value ? (
			<VisibleDay key={day.id}>{day.value}</VisibleDay>
		) : (
			<InvisibleDay key={day.id}>{}</InvisibleDay>
		)
	);
};

const Calendar = ({ title, year, month }: { title: string; year: number; month: number }) => {
	return (
		<>
			{title === "prev" && <PrevButton colorset="black" size={16} />}
			{getCalTitle({ year, month })}
			{title === "next" && <NextButton colorset="black" size={16} />}
			<CalendarDayBox>
				{getLabel}
				{getCalData({ year, month })}
			</CalendarDayBox>
		</>
	);
};

const CalendarDetail = () => {
	return (
		<StyledCalendars>
			<StyledCalendar>
				<Calendar title="prev" year={currentYear} month={currentMonth} />
			</StyledCalendar>
			<StyledCalendar>
				<Calendar title="next" year={currentYear} month={currentMonth + 1} />
			</StyledCalendar>
		</StyledCalendars>
	);
};

export default CalendarDetail;

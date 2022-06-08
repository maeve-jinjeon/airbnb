import { StyledCalendarDayBox, StyledCalendarLabel } from "./Calendar.styled";
import CalendarCell from "./CalendarCell";

const days = [
	{ id: 0, value: "일" },
	{ id: 1, value: "월" },
	{ id: 2, value: "화" },
	{ id: 3, value: "수" },
	{ id: 4, value: "목" },
	{ id: 5, value: "금" },
	{ id: 6, value: "토" },
];

const CalendarDayBox = ({ year, month }: { year: number; month: number }) => {
	const currentDay = new Date(year, month, 1).getDay();
	const endDay = new Date(year, month + 1, 0);
	const nextDate = endDay.getDate();
	const nextDay = endDay.getDay();

	const calendarData = [];
	let calendarDataLength = 0;

	for (let i = 0; i < currentDay; i += 1) {
		calendarData.push({ id: calendarDataLength, date: 0, year, month });
		calendarDataLength += 1;
	}

	for (let i = 1; i <= nextDate; i += 1) {
		calendarData.push({ id: calendarDataLength, date: i, year, month });
		calendarDataLength += 1;
	}

	for (let i = 1; i <= 6 - nextDay; i += 1) {
		calendarData.push({ id: calendarDataLength, date: 0, year, month });
		calendarDataLength += 1;
	}

	const calendarCells = calendarData.map((dayInfo, idx, arr) => {
		const isFirst = dayInfo.date === 1;
		const isLast = arr[idx + 1] ? !arr[idx + 1].date && dayInfo.date !== 0 : true;
		return <CalendarCell dayInfo={dayInfo} isLast={isLast} isFirst={isFirst} />;
	});

	const calendarLabels = days.map(({ id, value }) => (
		<StyledCalendarLabel key={id}>{value}</StyledCalendarLabel>
	));

	return (
		<StyledCalendarDayBox>
			{calendarLabels}
			{calendarCells}
		</StyledCalendarDayBox>
	);
};

export default CalendarDayBox;

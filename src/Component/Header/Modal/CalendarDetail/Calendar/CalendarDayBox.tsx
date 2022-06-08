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

	const calData = [];
	let calDataLength = 0;

	for (let i = 0; i < currentDay; i += 1) {
		calData.push({ id: calDataLength, date: 0, year, month });
		calDataLength += 1;
	}

	for (let i = 1; i <= nextDate; i += 1) {
		calData.push({ id: calDataLength, date: i, year, month });
		calDataLength += 1;
	}

	for (let i = 1; i <= 6 - nextDay; i += 1) {
		calData.push({ id: calDataLength, date: 0, year, month });
		calDataLength += 1;
	}

	const resultData = calData.map((dayInfo, idx, arr) => {
		if (!arr[idx + 1]) return <CalendarCell dayInfo={dayInfo} isLast={false} isFirst={false} />;

		const isFirst = dayInfo.date === 1;
		const isLast = !arr[idx + 1].date && dayInfo.date !== 0;
		// if (dayInfo.date === 31) console.log(arr[idx + 1].date, dayInfo.date, isLast);

		return <CalendarCell dayInfo={dayInfo} isLast={isLast} isFirst={isFirst} />;
	});

	const calendarlabels = days.map(({ id, value }) => (
		<StyledCalendarLabel key={id}>{value}</StyledCalendarLabel>
	));

	return (
		<StyledCalendarDayBox>
			{calendarlabels}
			{resultData}
		</StyledCalendarDayBox>
	);
};

export default CalendarDayBox;

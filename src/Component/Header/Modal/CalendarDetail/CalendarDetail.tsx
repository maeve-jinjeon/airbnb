import { PrevButton, NextButton } from "util/Icons";
import {
	VisibleDay,
	InvisibleDay,
	CalendarDayBox,
	CalendarLabel,
	CalendarTitle,
	Calendar,
	Calendars,
} from "./CalendarDetail.styled";

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date(currentYear, currentMonth, 1).getDay();
const endDay = new Date(currentYear, currentMonth + 1, 0);
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

const getCalTitle = (
	<CalendarTitle>
		{currentYear}년 {currentMonth + 1}월
	</CalendarTitle>
);

const days = [
	{ id: 0, value: "일" },
	{ id: 1, value: "월" },
	{ id: 2, value: "화" },
	{ id: 3, value: "수" },
	{ id: 4, value: "목" },
	{ id: 5, value: "금" },
	{ id: 6, value: "토" },
];

const getLabel = days.map((day) => <CalendarLabel key={day.id}>{day.value}</CalendarLabel>);

const getCalData = calData.map((day) =>
	day.value ? (
		<VisibleDay key={day.id}>{day.value}</VisibleDay>
	) : (
		<InvisibleDay key={day.id}>{}</InvisibleDay>
	)
);

const CalendarDetail = () => {
	return (
		<Calendars>
			<Calendar>
				<PrevButton colorset="black" size={16} />
				{getCalTitle}
				<CalendarDayBox>
					{getLabel}
					{getCalData}
				</CalendarDayBox>
			</Calendar>
			<Calendar>
				{getCalTitle}
				<NextButton colorset="black" size={16} />
				<CalendarDayBox>
					{getLabel}
					{getCalData}
				</CalendarDayBox>
			</Calendar>
		</Calendars>
	);
};

export default CalendarDetail;

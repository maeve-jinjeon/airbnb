import { useState, useContext } from "react";
import { ScheduleContext, ScheduleDispatchContext } from "Context/ScheduleContext";
import { getLateDay } from "util/util";
import { PrevButton, NextButton } from "util/Icons";
import {
	VisibleDay,
	VisibleDayBg,
	InvisibleDay,
	CalendarDayBox,
	CalendarLabel,
	CalendarTitle,
	StyledCalendar,
	StyledCalendars,
} from "./CalendarDetail.styled";

const CalendarDetail = () => {
	const { checkin, checkout } = useContext(ScheduleContext);
	const scheduleDispatch = useContext(ScheduleDispatchContext);

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

	const [thisYear, setThisYear] = useState(currentYear);
	const [thisMonth, setThisMonth] = useState(currentMonth);

	const makeCalCell = (
		dayInfo: { id: number; date: number; year: number; month: number },
		isLast: boolean = false,
		isFirst: boolean = false
	) => {
		const { id, date, year, month } = dayInfo;
		const selectedDayInfo = { year, month, date };
		const isCheckin = JSON.stringify(checkin) === JSON.stringify(selectedDayInfo);
		const isCheckout = JSON.stringify(checkout) === JSON.stringify(selectedDayInfo);
		const isChecked = isCheckin || isCheckout;
		const isBetween =
			getLateDay(checkin, selectedDayInfo) === selectedDayInfo &&
			getLateDay(checkout, selectedDayInfo) === checkout;

		const handleSchedule = () => {
			scheduleDispatch({ type: "ENROLL", dayInfo: selectedDayInfo });
		};

		return date ? (
			<VisibleDayBg
				key={id}
				isBetween={isBetween}
				isLast={isLast}
				isFirst={isFirst}
				isCheckin={isCheckin}
				isCheckout={isCheckout}
			>
				<VisibleDay onClick={handleSchedule} key={id} isChecked={isChecked}>
					{date}
				</VisibleDay>
			</VisibleDayBg>
		) : (
			<InvisibleDay key={id}>{}</InvisibleDay>
		);
	};

	const getCalData = ({ year, month }: { year: number; month: number }) => {
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

		return calData.map((dayInfo, idx, arr) => {
			if (!arr[idx + 1]) return makeCalCell(dayInfo);
			const isFirst = dayInfo.date === 1;
			const isLast = arr[idx + 1].date === 0 && dayInfo.date !== 0;
			return makeCalCell(dayInfo, isLast, isFirst);
		});
	};

	const showPrevMonths = () => {
		if (thisMonth - 2 < 0) {
			setThisYear(thisYear - 1);
			setThisMonth(thisMonth + 10);
		} else {
			setThisMonth(thisMonth - 2);
		}
	};

	const showNextMonths = () => {
		if (thisMonth + 2 >= 12) {
			setThisYear(thisYear + 1);
			setThisMonth(thisMonth - 10);
		} else {
			setThisMonth(thisMonth + 2);
		}
	};

	// TODO : 여기 해결
	// eslint-disable-next-line react/no-unstable-nested-components
	const Calendar = ({ title, year, month }: { title: string; year: number; month: number }) => {
		return (
			<>
				{title === "prev" && <PrevButton onClick={showPrevMonths} colorset="black" size={16} />}
				{getCalTitle({ year, month })}
				{title === "next" && <NextButton onClick={showNextMonths} colorset="black" size={16} />}
				<CalendarDayBox>
					{getLabel}
					{getCalData({ year, month })}
				</CalendarDayBox>
			</>
		);
	};

	return (
		<StyledCalendars>
			<StyledCalendar>
				<Calendar title="prev" year={thisYear} month={thisMonth} />
			</StyledCalendar>
			<StyledCalendar>
				<Calendar title="next" year={thisYear} month={thisMonth + 1} />
			</StyledCalendar>
		</StyledCalendars>
	);
};

export default CalendarDetail;

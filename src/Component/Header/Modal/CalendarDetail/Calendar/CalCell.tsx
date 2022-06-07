import { useContext } from "react";

import { getLateDay } from "util/util";
import { ScheduleContext, ScheduleDispatchContext } from "Context";
import { VisibleDay, VisibleDayBg, InvisibleDay } from "../CalendarDetail.styled";

const CalCell = ({
	dayInfo,
	isLast = false,
	isFirst = false,
}: {
	dayInfo: { id: number; date: number; year: number; month: number };
	isLast: boolean;
	isFirst: boolean;
}) => {
	const { checkin, checkout } = useContext(ScheduleContext);
	const scheduleDispatch = useContext(ScheduleDispatchContext);
	const { id, date, year, month } = dayInfo;

	const selectedDayInfo = { year, month, date };
	const isCheckin = JSON.stringify(checkin) === JSON.stringify(selectedDayInfo);
	const isCheckout = JSON.stringify(checkout) === JSON.stringify(selectedDayInfo);
	const isChecked = isCheckin || isCheckout;
	const isBetween =
		getLateDay(checkin, selectedDayInfo) === selectedDayInfo &&
		getLateDay(checkout, selectedDayInfo) === checkout;

	const handleSchedule = () => {
		if (isCheckin && checkin.year && checkout.year) {
			scheduleDispatch({ type: "RESET_CHECKOUT", dayInfo: selectedDayInfo });
			return;
		}
		if (isCheckin) return;
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

export default CalCell;

import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

type scheduleType = {
	checkInMonth: number;
	checkInDate: number;
	checkOutMonth: number;
	checkOutDate: number;
};

type setScheduleType = Dispatch<SetStateAction<scheduleType>>;

const defaultSchedule = { checkInMonth: 0, checkInDate: 0, checkOutMonth: 0, checkOutDate: 0 };

const ScheduleContext = createContext<scheduleType>(defaultSchedule);
const SetScheduleContext = createContext<setScheduleType | null>(null);

const ScheduleProvider = ({ inner }: { inner: ReactNode }) => {
	const [schedule, setSchedule] = useState<scheduleType>(defaultSchedule);

	return (
		<ScheduleContext.Provider value={schedule}>
			<SetScheduleContext.Provider value={setSchedule}>{inner}</SetScheduleContext.Provider>
		</ScheduleContext.Provider>
	);
};

export { ScheduleProvider, ScheduleContext, SetScheduleContext };

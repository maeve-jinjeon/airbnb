import styled, { css } from "styled-components";

const VisibleDay = styled.div`
	${({ theme: { width, height, fontSize, fontWeight, colors } }) => css`
		width: ${width.calendarDay};
		height: ${height.calendarDay};
		line-height: ${height.calendarDay};
		font-size: ${fontSize.xSmall};
		font-weight: ${fontWeight.large};
		color: ${colors.grey1};
	`}
	text-align: center;
`;

const InvisibleDay = styled.div`
	${({ theme: { width, height } }) => css`
		width: ${width.calendarDay};
		height: ${height.calendarDay};
	`}
`;

const CalendarDayBox = styled.div`
	${({ theme: { width, height } }) => css`
		width: ${width.calendarDayBox};
		height: ${height.calendarDayBox};
	`}
	display: flex;
	flex-wrap: wrap;
	align-content: space-around;
	justify-content: center;
`;

const CalendarLabel = styled.div`
	${({ theme: { width, height, fontSize, fontWeight, colors } }) => css`
		width: ${width.calendarLabel};
		height: ${height.calendarLabel};
		line-height: ${height.calendarLabel};
		font-size: ${fontSize.xSmall};
		font-weight: ${fontWeight.small};
		color: ${colors.grey3};
	`}
	display: flex;
	align-content: space-around;
	justify-content: center;
`;

const CalendarTitle = styled.div`
	${({ theme: { width, height, fontSize, fontWeight, colors } }) => css`
		width: ${width.calendarTitle};
		height: ${height.calendarTitle};
		font-size: ${fontSize.medium};
		font-weight: ${fontWeight.medium};
		color: ${colors.black};
	`}
	text-align: center;
	margin: 0 auto;
	margin-bottom: 34px;
`;

const Calendar = styled.div`
	${({ theme: { width, height } }) => css`
		width: ${width.calendar};
		height: ${height.calendar};
	`}
	display: flex;
	flex-wrap: wrap;
	align-content: space-around;
`;

const Calendars = styled.div`
	display: flex;
	justify-content: space-around;
	width: 800px;
`;

export {
	VisibleDay,
	InvisibleDay,
	CalendarDayBox,
	CalendarLabel,
	CalendarTitle,
	Calendar,
	Calendars,
};

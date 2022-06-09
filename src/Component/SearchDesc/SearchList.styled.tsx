import styled, { css } from "styled-components";

const StyledSearchList = styled.div`
	${({ theme: { height } }) => css`
		height: ${height.searchList};
		display: flex;
		justify-content: space-between;
		border-bottom: ;
		padding: 20px 0;
	`}
`;

const StyledSearchListInfo = styled.div`
	${({ theme: { width } }) => css`
		width: ${width.searchListChild};
		border: solid 1px red;
		position: relative;
	`}
`;

const StyledHotelInfo = styled.div`
	${({ theme: { width } }) => css`
		width: ${width.hotelInfo};
	`}
`;

const StyledHotelName = styled.div`
	${({ theme: { fontSize, fontWeight, colors } }) => css`
		font-size: ${fontSize.small};
		font-weight: ${fontWeight.small};
		color: ${colors.black};
		margin-bottom: 8px;
	`}
`;

const StyledHotelDetails = styled.div`
	${({ theme: { fontSize, fontWeight, colors } }) => css`
		font-size: ${fontSize.xSmall};
		font-weight: ${fontWeight.small};
		color: ${colors.grey2};
		line-height: 18px;
	`}
`;

const StyledHotelPriceInfo = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
`;

const StyledHotelPrice = styled.div`
	display: flex;
	${({ theme: { fontSize, fontWeight, colors } }) => css`
		color: ${colors.black};
		> :nth-child(1) {
			font-size: ${fontSize.small};
			font-weight: ${fontWeight.large};
		}

		> :nth-child(2) {
			font-size: ${fontSize.small};
			font-weight: ${fontWeight.small};
		}
	`}
`;

export {
	StyledSearchList,
	StyledSearchListInfo,
	StyledHotelInfo,
	StyledHotelName,
	StyledHotelDetails,
	StyledHotelPriceInfo,
	StyledHotelPrice,
};

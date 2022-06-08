import styled, { css } from "styled-components";

interface IHeaderBackgroundImgn {
	image: any;
	isLocationSearch: boolean;
}

const HeaderBackgroundImg = styled.div<IHeaderBackgroundImgn>`
	${({ theme: { height, width }, image, isLocationSearch }) =>
		isLocationSearch === false
			? css`
					background: url(${image}) no-repeat center;
					background-size: cover;
					min-width: ${width.header};
					height: ${height.header1};
			  `
			: css``}
`;

export default HeaderBackgroundImg;

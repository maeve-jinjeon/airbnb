import styled, { css } from "styled-components";
import logoSrc from "util/logo.png";
import coverSrc from "../../util/airbnb.png";

const HeaderBackgroundImg = styled.div`
	${({ theme: { height } }) => css`
		background: url(${coverSrc}) no-repeat center;
		background-size: cover;
		height: ${height.header1};
	`}
`;

const StyledGNB = styled.div`
	${({ theme: { width } }) => css`
		margin: 0 auto;
		width: ${width.header};
	`}
	display: flex;
`;

const GNBImg = styled.img.attrs({
	src: `${logoSrc}`,
})`
	${({ theme: { width } }) => css`
		alt: "logo";
		width: ${width.GNBImg};
		padding: 10px;
	`}
`;

export { HeaderBackgroundImg, StyledGNB, GNBImg };

import styled, { css } from "styled-components";
import coverSrc from "../../util/airbnb.png";

const HeaderBackgroundImg = styled.div`
	${({ theme: { height, width } }) => css`
		background: url(${coverSrc}) no-repeat center;
		background-size: cover;
		min-width: ${width.header};
		height: ${height.header1};
	`}
`;

export default HeaderBackgroundImg;

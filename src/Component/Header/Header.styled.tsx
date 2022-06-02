import styled, { css } from "styled-components";

const HeaderBackgroundImg = styled.div<{ image: any }>`
	${({ theme: { height, width }, image }) => css`
		background: url(${image}) no-repeat center;
		background-size: cover;
		min-width: ${width.header};
		height: ${height.header1};
	`}
`;

export default HeaderBackgroundImg;

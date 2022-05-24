import { createGlobalStyle, css } from "styled-components";

const Normalize = createGlobalStyle`
	${({ theme: { colors, font } }) => css`
		.App {
			${font.main};
			color: ${colors.black};
		}
	`}
`;

export default Normalize;

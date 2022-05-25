import { createGlobalStyle, css } from "styled-components";

const Normalize = createGlobalStyle`
	${({ theme: { colors, fontMain } }) => css`
		.App {
			${fontMain};
			color: ${colors.black};
			width: 100wh;
		}
	`}
`;

export default Normalize;

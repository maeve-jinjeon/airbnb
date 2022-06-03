import { createGlobalStyle, css } from "styled-components";

const Normalize = createGlobalStyle`
	${({ theme: { colors, fontMain } }) => css`
		.App {
			${fontMain};
			color: ${colors.black};
			width: 100vw;
			height: 100vh;
			div {
				box-sizing: border-box;
			}
		}
	`}

	@keyframes fade-in {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}

	@keyframes fade-out {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;

export default Normalize;

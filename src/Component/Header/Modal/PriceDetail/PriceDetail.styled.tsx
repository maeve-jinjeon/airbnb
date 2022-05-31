import styled, { css } from "styled-components";

const StyledPriceDetail = styled.div`
	${({ theme: { colors, fontSize, fontWeight } }) => css`
		color: ${colors.primary};

		> :nth-child(1) {
			color: ${colors.black};
			font-size: ${fontSize.medium};
			font-weight: ${fontWeight.large};
		}

		> :nth-child(2) {
			margin-top: 15px;
			color: ${colors.grey1};
			font-size: ${fontSize.large};
			font-weight: ${fontWeight.small};
		}

		> :nth-child(3) {
			margin-top: 5px;
			color: ${colors.grey3};
			font-size: ${fontSize.small};
			font-weight: ${fontWeight.small};
		}
	`}
`;

export default StyledPriceDetail;

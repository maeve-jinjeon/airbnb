import styled, { css } from "styled-components";

const SearchDescWrapper = styled.div`
	margin: 0 auto;
	display: flex;
	${({ theme: { width } }) => css`
		width: ${width.header};
		height: 2000px;
	`}
`;

const StyledSearchLists = styled.div`
	${({ theme: { width } }) => css`
		width: ${width.searchLists};
		height: 1800px;
	`}
`;

const StyledResultSummary = styled.div`
	margin-top: 10px;
	overflow: hidden;
	${({ theme: { fontSize, fontWeight, colors } }) => css`
		font-size: ${fontSize.xSmall};
		font-weight: ${fontWeight.small};
		color: ${colors.grey2};
	`}
`;

export { SearchDescWrapper, StyledSearchLists, StyledResultSummary };

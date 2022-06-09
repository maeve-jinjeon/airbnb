import styled, { css } from "styled-components";

const SearchDescWrapper = styled.div`
	margin: 0 auto;
	margin-top: 120px;
	display: flex;
	justify-content: space-between;
	${({ theme: { width } }) => css`
		width: ${width.header};
		height: 2000px;
	`}
`;

const StyledSearchLists = styled.div`
	${({ theme: { width } }) => css`
		width: ${width.searchLists};
		height: 1800px;
		padding: 10px;
	`}
`;

const StyledResultSummary = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	overflow: hidden;
	${({ theme: { fontSize, fontWeight, colors } }) => css`
		font-size: ${fontSize.xSmall};
		font-weight: ${fontWeight.small};
		color: ${colors.grey2};
	`}
`;

const StyledListMention = styled.div`
	margin-bottom: 20px;
	${({ theme: { fontSize, fontWeight, colors } }) => css`
		font-size: ${fontSize.xLarge};
		font-weight: ${fontWeight.Large};
		color: ${colors.black};
	`}
`;

const StyledMap = styled.div`
	${({ theme: { width } }) => css`
		width: ${width.searchMap};
		height: 100vh;
		border-radius: 20px;
		overflow: hidden;
	`}
`;

export { SearchDescWrapper, StyledSearchLists, StyledResultSummary, StyledListMention, StyledMap };

import styled, { css } from "styled-components";

const StyledSearchBar = styled.div`
	${({ theme: { width, height, colors } }) => css`
		display: flex;
		align-items: center;
		margin: 0 auto;
		margin-top: 16px;

		width: ${width.searchbar};
		height: ${height.searchbar};
		border: 1px solid ${colors.grey4};
		border-radius: 60px;
		background-color: ${colors.white};
	`}
`;

interface IStyledSearchBarChild {
	name: string;
}

const StyledSearchBarChild = styled.div<IStyledSearchBarChild>`
	${({ theme: { fontSize, fontWeight, colors, width }, name }) => css`
		width: ${width[`${name}Child`]};
		cursor: pointer;

		> :first-child {
			font-size: ${fontSize.xSmall};
			font-weight: ${fontWeight.large};
			line-height: 17px;
		}
		> :last-child {
			margin-top: 5px;
			font-size: ${fontSize.medium};
			font-weight: ${fontWeight.small};
			line-height: 23px;
			color: ${colors.grey2};

			display: block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	`}
`;

const SearchIcon = styled.div`
	${({ theme: { colors } }) => css`
		border: solid 1px ${colors.primary};
		border-radius: 30px;
		padding: 4px;
		padding-right: 15px;
		background-color: ${colors.primary};
		width: 90px;
		height: 40px;
		line-height: 30px;
		text-align: center;
		display: flex;
		justify-content: space-evenly;
		color: ${colors.white};
	`}
`;

export { StyledSearchBar, StyledSearchBarChild, SearchIcon };

import { Link } from "react-router-dom";

import { SearchButton } from "util/Icons";
import Schedule from "./Schedule/Schedule";
import { StyledSearchBar, SearchIcon } from "./SearchBar.styled";
import Price from "./Price/Price";
import Guest from "./Guest/Guest";

// TODO: props 받는 부분 수정
const SearchBar = (props: any) => {
	const { searchBarIsHidden } = props;
	return (
		<StyledSearchBar searchBarIsHidden={searchBarIsHidden}>
			<Schedule />
			<Price />
			<Guest />
			<Link to="search">
				<SearchIcon>
					<SearchButton colorset="white" size={30} />
					<div>검색</div>
				</SearchIcon>
			</Link>
		</StyledSearchBar>
	);
};

export default SearchBar;

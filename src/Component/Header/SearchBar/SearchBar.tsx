import { Link } from "react-router-dom";

import { SearchButton } from "util/Icons";
import Schedule from "./Schedule/Schedule";
import { StyledSearchBar, SearchIcon } from "./SearchBar.styled";
import Price from "./Price/Price";
import Guest from "./Guest/Guest";

const SearchBar = (props: any) => {
	const { searchBarIsHidden, miniBarIsClicked } = props;
	return (
		<StyledSearchBar searchBarIsHidden={searchBarIsHidden} miniBarIsClicked={miniBarIsClicked}>
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

import { SearchButton } from "util/Icons";
import Schedule from "./Schedule/Schedule";
import { StyledSearchBar, SearchIcon } from "./SearchBar.styled";
import Price from "./Price/Price";
import Guest from "./Guest/Guest";

const SearchBar = () => {
	return (
		<StyledSearchBar>
			<Schedule />
			<Price />
			<Guest />
			<SearchIcon>
				<SearchButton colorSet="white" size={30} />
				<div>검색</div>
			</SearchIcon>
		</StyledSearchBar>
	);
};

export default SearchBar;

import { Link } from "react-router-dom";
import { useContext } from "react";
import { ModalContext, CheckModalContext } from "Context";
import { SearchButton } from "util/Icons";
import Schedule from "./Schedule/Schedule";
import { StyledSearchBar, SearchIcon } from "./SearchBar.styled";
import Price from "./Price/Price";
import Guest from "./Guest/Guest";

interface ISearchBarProps {
	searchBarIsHidden: boolean;
	miniBarIsClicked: boolean;
}

const SearchBar = ({ searchBarIsHidden, miniBarIsClicked }: ISearchBarProps) => {
	const modal = useContext(ModalContext);
	const checkModal = useContext(CheckModalContext);

	const handleModalPopup = () => {
		if (modal !== "empty") checkModal("empty");
	};

	return (
		<StyledSearchBar searchBarIsHidden={searchBarIsHidden} miniBarIsClicked={miniBarIsClicked}>
			<Schedule />
			<Price />
			<Guest />
			<Link to="search">
				<SearchIcon onClick={handleModalPopup}>
					<SearchButton colorset="white" size={30} />
					<div>검색</div>
				</SearchIcon>
			</Link>
		</StyledSearchBar>
	);
};

export default SearchBar;

import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ModalContext, CheckModalContext } from "Context";
import { SearchButton } from "util/Icons";
import Schedule from "./Schedule/Schedule";
import { StyledSearchBar, SearchIcon, SearchBarWrapper } from "./SearchBar.styled";
import Price from "./Price/Price";
import Guest from "./Guest/Guest";

interface ISearchBarProps {
	searchBarIsHidden: boolean;
	miniBarIsClicked: boolean;
	isLocationSearch: boolean;
	setSearchBarIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
	setMiniSearchBarIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar = ({
	searchBarIsHidden,
	miniBarIsClicked,
	isLocationSearch,
	setSearchBarIsHidden,
	setMiniSearchBarIsHidden,
}: ISearchBarProps) => {
	const modal = useContext(ModalContext);
	const checkModal = useContext(CheckModalContext);

	const handleModalPopup = () => {
		if (modal !== "empty") checkModal("empty");
	};

	const handleOnAnimationEnd = () => {
		if (!miniBarIsClicked) {
			setSearchBarIsHidden(true);
			setMiniSearchBarIsHidden(false);
		}
	};

	return (
		<SearchBarWrapper>
			<StyledSearchBar
				isLocationSearch={isLocationSearch}
				searchBarIsHidden={searchBarIsHidden}
				miniBarIsClicked={miniBarIsClicked}
				onAnimationEnd={handleOnAnimationEnd}
			>
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
		</SearchBarWrapper>
	);
};

export default SearchBar;

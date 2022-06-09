import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HeaderBackgroundImg, StyledSearchBarWrapper, HeaderBackground } from "./Header.styled";
import GNB from "./GNB/GNB";
import SearchBar from "./SearchBar/SearchBar";
import MiniSearchBar from "./SearchBar/MiniSearchBar/MiniSearchBar";
import Modal from "./Modal/Modal";
import coverSrc from "../../img/airbnb.png";

const Header = () => {
	const [bgImage, setBgImage] = useState(null);
	const [miniSearchBarIsHidden, setMiniSearchBarIsHidden] = useState(false);
	const [searchBarIsHidden, setSearchBarIsHidden] = useState(false);
	const [miniBarIsClicked, setMiniBarIsClicked] = useState(false);

	const { pathname } = useLocation();
	const isLocationSearch = pathname === "/search";

	useEffect(() => {
		setBgImage(coverSrc);
	}, []);

	useEffect(() => {
		if (isLocationSearch) {
			setMiniSearchBarIsHidden(false);
			setSearchBarIsHidden(true);
		} else {
			setMiniSearchBarIsHidden(true);
			setSearchBarIsHidden(false);
		}
	}, [pathname]);

	useEffect(() => {
		if (miniBarIsClicked) {
			setMiniSearchBarIsHidden(true);
			setSearchBarIsHidden(false);
		}
	}, [miniBarIsClicked]);

	const handleSearchBarAnimation = () => {
		if (miniBarIsClicked) {
			setMiniBarIsClicked(false);
		}
	};

	return (
		<HeaderBackground onClick={handleSearchBarAnimation}>
			<HeaderBackgroundImg image={bgImage} isLocationSearch={isLocationSearch}>
				<GNB isLocationSearch={isLocationSearch} miniBarIsClicked={miniBarIsClicked} />
				<StyledSearchBarWrapper
					isLocationSearch={isLocationSearch}
					miniBarIsClicked={miniBarIsClicked}
				>
					<MiniSearchBar
						miniSearchBarIsHidden={miniSearchBarIsHidden}
						miniBarIsClicked={miniBarIsClicked}
						setMiniBarIsClicked={setMiniBarIsClicked}
					/>
					<SearchBar
						isLocationSearch={isLocationSearch}
						searchBarIsHidden={searchBarIsHidden}
						miniBarIsClicked={miniBarIsClicked}
						setSearchBarIsHidden={setSearchBarIsHidden}
						setMiniSearchBarIsHidden={setMiniSearchBarIsHidden}
					/>
				</StyledSearchBarWrapper>
				<Modal />
			</HeaderBackgroundImg>
		</HeaderBackground>
	);
};

export default Header;

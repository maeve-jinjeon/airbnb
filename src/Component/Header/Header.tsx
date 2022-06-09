import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ModalContext, CheckModalContext } from "Context";
import { HeaderBackgroundImg, StyledSearchBarWrapper, HeaderBackground } from "./Header.styled";
import GNB from "./GNB/GNB";
import SearchBar from "./SearchBar/SearchBar";
import Modal from "./Modal/Modal";
import coverSrc from "../../img/airbnb.png";

const Header = () => {
	const [bgImage, setBgImage] = useState(null);
	const [miniSearchBarIsHidden, setMiniSearchBarIsHidden] = useState(false);
	const [searchBarIsHidden, setSearchBarIsHidden] = useState(false);
	const [miniBarIsClicked, setMiniBarIsClicked] = useState(false);

	const modal = useContext(ModalContext);
	const checkModal = useContext(CheckModalContext);

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

	const handleModalMiniBar = () => {
		if (modal !== "empty") checkModal("empty");
		if (miniBarIsClicked) {
			setMiniBarIsClicked(false);
		}
	};

	return (
		<HeaderBackground onClick={handleModalMiniBar} isLocationSearch={isLocationSearch}>
			<HeaderBackgroundImg image={bgImage} isLocationSearch={isLocationSearch}>
				<GNB
					isLocationSearch={isLocationSearch}
					miniBarIsClicked={miniBarIsClicked}
					miniSearchBarIsHidden={miniSearchBarIsHidden}
					setMiniBarIsClicked={setMiniBarIsClicked}
				/>
				<StyledSearchBarWrapper
					isLocationSearch={isLocationSearch}
					miniBarIsClicked={miniBarIsClicked}
				>
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

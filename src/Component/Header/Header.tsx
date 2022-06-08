import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderBackgroundImg from "./Header.styled";
import GNB from "./GNB/GNB";
import SearchBar from "./SearchBar/SearchBar";
import MiniSearchBar from "./SearchBar/MiniSearchBar/MiniSearchBar";
import Modal from "./Modal/Modal";
import coverSrc from "../../util/airbnb.png";

const Header = () => {
	const [bgImage, setBgImage] = useState(null);
	const [miniSearchBarIsHidden, setMiniSearchBarIsHidden] = useState(false);
	const [searchBarIsHidden, setSearchBarIsHidden] = useState(false);

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

	const handleAnimationState = () => {
		setMiniSearchBarIsHidden(true);
		setSearchBarIsHidden(false);
	};

	return (
		<HeaderBackgroundImg image={bgImage} isLocationSearch={isLocationSearch}>
			<GNB isLocationSearch={isLocationSearch} />
			<MiniSearchBar
				miniSearchBarIsHidden={miniSearchBarIsHidden}
				handleAnimationState={handleAnimationState}
			/>
			<SearchBar searchBarIsHidden={searchBarIsHidden} />
			<Modal />
		</HeaderBackgroundImg>
	);
};

export default Header;

/* 

/search 라우팅되면 
gnb 없애고 
미니바 띄우고 
3초 동안 슬라이딩 애니메이션
3초 끝나면 미니바 없애고 서치바 띄우기 

/search 라우팅되면 -> onClick 으로 바꾸기 

*/

// miniSearchBarIsHidden props 를 넘겨줄 때 힘들었음

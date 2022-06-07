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

	const { pathname } = useLocation();
	console.log(pathname);
	const isLocationSearch = pathname === "/search";
	console.log(isLocationSearch);

	useEffect(() => {
		setBgImage(coverSrc);
	}, []);

	return (
		<HeaderBackgroundImg image={bgImage}>
			<GNB />
			{isLocationSearch && <MiniSearchBar />}
			<SearchBar />
			<Modal />
		</HeaderBackgroundImg>
	);
};

export default Header;

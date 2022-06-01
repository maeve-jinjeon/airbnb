import { useEffect, useState } from "react";

import HeaderBackgroundImg from "./Header.styled";
import GNB from "./GNB/GNB";
import SearchBar from "./SearchBar/SearchBar";
import Modal from "./Modal/Modal";
import coverSrc from "../../util/airbnb.png";

const Header = () => {
	const [bgImage, setBgImage] = useState(null);

	useEffect(() => {
		setBgImage(coverSrc);
	}, []);

	return (
		<HeaderBackgroundImg image={bgImage}>
			<GNB />
			<SearchBar />
			<Modal />
		</HeaderBackgroundImg>
	);
};

export default Header;

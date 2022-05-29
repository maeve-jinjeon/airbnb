import HeaderBackgroundImg from "./Header.styled";
import GNB from "./GNB/GNB";
import SearchBar from "./SearchBar/SearchBar";
import Modal from "./Modal/Modal";

const Header = () => {
	return (
		<HeaderBackgroundImg>
			<GNB />
			<SearchBar />
			<Modal />
		</HeaderBackgroundImg>
	);
};
// for test

export default Header;

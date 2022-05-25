import HeaderBackgroundImg from "./Header.styled";
import GNB from "./GNB/GNB";
import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
	return (
		<HeaderBackgroundImg>
			<GNB />
			<SearchBar />
		</HeaderBackgroundImg>
	);
};
// for test

export default Header;

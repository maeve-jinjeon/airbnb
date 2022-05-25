import { HeaderBackgroundImg, StyledGNB, GNBImg } from "./Header.styled";

const navListItems: string[] = ["숙소", "체험", "온라인 체험"];

const GNBNav = () => {
	const navList = navListItems.map((item: string) => <li>{item}</li>);
	return <ul>{navList}</ul>;
};

const Header = () => {
	return (
		<HeaderBackgroundImg>
			<StyledGNB>
				<GNBImg />
				<GNBNav />
			</StyledGNB>

			{/* <SearchBar /> */}
		</HeaderBackgroundImg>
	);
};
// for test

export default Header;

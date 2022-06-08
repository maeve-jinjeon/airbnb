import { SearchButton } from "util/Icons";
import { StyledMiniSearchBar, SearchIcon } from "./MiniSearchBar.styled";

import MiniSchedule from "./MiniSchedule/MiniSchedule";
import MiniPrice from "./MiniPrice/MiniPrice";
import MiniGuest from "./MiniGuest/MiniGuest";

const MiniSearchBar = (props: any) => {
	const { miniSearchBarIsHidden, miniBarIsClicked, setMiniBarIsClicked } = props;

	const handleMiniBarIsClicked = () => {
		setMiniBarIsClicked(!miniBarIsClicked);
	};

	return (
		<StyledMiniSearchBar
			miniSearchBarIsHidden={miniSearchBarIsHidden}
			onClick={handleMiniBarIsClicked}
		>
			<MiniSchedule />
			<MiniPrice />
			<MiniGuest />
			<SearchIcon>
				<SearchButton colorset="white" size={23} />
			</SearchIcon>
		</StyledMiniSearchBar>
	);
};

export default MiniSearchBar;

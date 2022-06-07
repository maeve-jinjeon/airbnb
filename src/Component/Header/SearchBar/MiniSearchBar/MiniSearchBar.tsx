import { SearchButton } from "util/Icons";
import { StyledMiniSearchBar, SearchIcon } from "./MiniSearchBar.styled";

import MiniSchedule from "./MiniSchedule/MiniSchedule";
import MiniPrice from "./MiniPrice/MiniPrice";
import MiniGuest from "./MiniGuest/MiniGuest";

// TODO: props 받는 부분 수정
const MiniSearchBar = (props: any) => {
	const { miniSearchBarIsHidden } = props;
	return (
		<StyledMiniSearchBar miniSearchBarIsHidden={miniSearchBarIsHidden}>
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

import { useState } from "react";
import { SearchButton } from "util/Icons";
import { StyledMiniSearchBar, SearchIcon } from "./MiniSearchBar.styled";

import MiniSchedule from "./MiniSchedule/MiniSchedule";
import MiniPrice from "./MiniPrice/MiniPrice";
import MiniGuest from "./MiniGuest/MiniGuest";

// TODO: props 받는 부분 수정
const MiniSearchBar = (props: any) => {
	const { miniSearchBarIsHidden, handleAnimationState } = props;
	const [miniBarIsClicked, setMiniBarIsClicked] = useState(false);

	const handleAnimation = () => {
		handleAnimationState();
	};

	const handleMiniBarIsClicked = () => {
		setMiniBarIsClicked(!miniBarIsClicked);
	};

	return (
		<StyledMiniSearchBar
			miniSearchBarIsHidden={miniSearchBarIsHidden}
			miniBarIsClicked={miniBarIsClicked}
			onAnimationEnd={handleAnimation}
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

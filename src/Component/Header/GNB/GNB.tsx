import { Link } from "react-router-dom";

import { AccountButton, MenuButton } from "util/Icons";
import { StyledGNB, StyledNavList, GNBImg, GNBAccountMenu } from "./GNB.styled";

type listItem = {
	id: number;
	name: string;
};

type GNBNavPropsType = {
	listItems: listItem[];
};

const navListItems: listItem[] = [
	{ id: 1, name: "숙소" },
	{ id: 2, name: "체험" },
	{ id: 3, name: "온라인 체험" },
];

const GNBNav = ({ listItems }: GNBNavPropsType) => {
	const navList = listItems.map((item: listItem) => <li key={item.id}>{item.name}</li>);
	return <StyledNavList>{navList}</StyledNavList>;
};

const GNB = () => {
	return (
		<StyledGNB>
			<Link to="/">
				<GNBImg />
			</Link>
			<GNBNav listItems={navListItems} />
			<GNBAccountMenu>
				<MenuButton colorset="grey2" size={16} />
				<AccountButton colorset="grey2" size={16} />
			</GNBAccountMenu>
		</StyledGNB>
	);
};

export default GNB;

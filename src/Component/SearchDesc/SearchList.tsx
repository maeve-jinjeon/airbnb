import { getPriceType } from "util/util";
import type { Thotel } from "./SearchLists";
import {
	StyledSearchList,
	StyledSearchListInfo,
	StyledHotelInfo,
	StyledHotelName,
	StyledHotelDetails,
	StyledHotelPriceInfo,
	StyledHotelPrice,
} from "./SearchList.styled";

type TSearchListProps = {
	hotel: Thotel;
};

type TShowedValueParams = {
	value: number | boolean;
	mention: string;
};

const DAY_UNIT = "\n/\n박";

const getShowedValue = (array: TShowedValueParams[]) => {
	return array
		.map(({ value, mention }) => (value ? mention : ""))
		.filter((info) => info.length)
		.join("∙");
};

const SearchList = ({
	hotel: {
		name,
		price,
		rooms: { peopleMax, bedroom, bed, bathroom },
		options: { kitchen, wifi, airConditioner, hairDryer },
	},
}: TSearchListProps) => {
	const roomsArray = [
		{ value: peopleMax, mention: `최대 인원 ${peopleMax}명` },
		{ value: bedroom, mention: `침실 ${bedroom}개` },
		{ value: bed, mention: `침대 ${bed}개` },
		{ value: bathroom, mention: `욕실 ${bathroom}개` },
	];
	const optionsArray = [
		{ value: kitchen, mention: "주방" },
		{ value: wifi, mention: "무선 인터넷" },
		{ value: airConditioner, mention: "에어컨" },
		{ value: hairDryer, mention: "헤어드라이어" },
	];

	const showedRooms = getShowedValue(roomsArray);
	const showedOptions = getShowedValue(optionsArray);
	const showedPrice = getPriceType(price, true);

	return (
		<StyledSearchList>
			<StyledSearchListInfo />
			<StyledSearchListInfo>
				<StyledHotelInfo>
					<StyledHotelName>{name}</StyledHotelName>
					<StyledHotelDetails>{showedRooms}</StyledHotelDetails>
					<StyledHotelDetails>{showedOptions}</StyledHotelDetails>
				</StyledHotelInfo>
				<StyledHotelPriceInfo>
					<StyledHotelPrice>
						<div>{showedPrice}</div>
						<div>{DAY_UNIT}</div>
					</StyledHotelPrice>
				</StyledHotelPriceInfo>
			</StyledSearchListInfo>
		</StyledSearchList>
	);
};

export default SearchList;

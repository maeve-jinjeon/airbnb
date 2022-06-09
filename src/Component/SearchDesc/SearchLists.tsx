import { useContext, useEffect, useMemo, useState } from "react";
import { ScheduleContext, GuestsContext, PriceContext } from "Context";
import { MIN_PRICE, MAX_PRICE, getPriceType, getDateDiff } from "util/util";
import hotelsApi from "Api/hotelsApi";
import SearchList from "./SearchList";
import { StyledSearchLists, StyledResultSummary, StyledListMention } from "./SearchDesc.styled";

type Thotel = {
	id: number;
	name: string;
	price: number;
	unavailableDate: [];
	rooms: {
		peopleMax: number;
		bedroom: number;
		bed: number;
		bathroom: number;
	};
	options: {
		kitchen: boolean;
		wifi: boolean;
		airConditioner: boolean;
		hairDryer: boolean;
	};
	location: string;
};

const LIST_MENTION = "지도에서 선택한 지역의 숙소";

const SearchLists = () => {
	const [hotels, setHotels] = useState<Thotel[]>([]);
	const [filteredHotels, setFilteredHotels] = useState<Thotel[]>([]);
	const { checkin, checkout } = useContext(ScheduleContext);
	const { adult, child, baby } = useContext(GuestsContext);
	const { min, max } = useContext(PriceContext);
	const isPriceDefault = min === MIN_PRICE && max === MAX_PRICE;

	const showedSchedule =
		checkin.year && checkout.year
			? ` ∙ ${checkin.month}월 ${checkin.date}일 - ${checkout.month}월 ${checkout.date}일`
			: "";
	const showedPrice = !isPriceDefault
		? `∙ ${getPriceType(min, true)} ~ ${getPriceType(max, true)}`
		: "";
	const showedGuests = adult + child !== 0 ? ` ∙ 게스트 ${adult + child}명 ` : "";
	const showedBaby = baby ? ` ∙ 유아 ${baby}명 ` : "";
	const showedHotelsNum = useMemo(() => `${filteredHotels.length}개의 숙소`, [filteredHotels]);
	const showedInfo = showedHotelsNum + showedSchedule + showedPrice + showedGuests + showedBaby;
	const dateDiff = getDateDiff(checkin, checkout);

	const resetFilteredHotels = (hotelsData: Thotel[]) => {
		if (isPriceDefault) {
			setFilteredHotels(hotelsData);
		} else {
			const filteredHotelsData = hotelsData.filter(({ price }) => price > min && price <= max);
			setFilteredHotels(filteredHotelsData);
		}
	};

	const fetchHotels = async () => {
		const hotelsData = await hotelsApi.getHotels();
		setHotels(hotelsData);
		resetFilteredHotels(hotelsData);
	};

	const filteredLists = filteredHotels.map((hotel) => {
		return <SearchList hotel={hotel} dateDiff={dateDiff} />;
	});

	useEffect(() => {
		fetchHotels();
	}, []);

	useEffect(() => {
		resetFilteredHotels(hotels);
	}, [min, max, checkin, checkout, adult, child, baby]);

	return (
		<StyledSearchLists>
			<StyledResultSummary>{showedInfo}</StyledResultSummary>
			<StyledListMention>{LIST_MENTION}</StyledListMention>
			{filteredLists}
		</StyledSearchLists>
	);
};

export default SearchLists;
export type { Thotel };

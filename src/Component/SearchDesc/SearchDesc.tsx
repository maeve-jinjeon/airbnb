import { useEffect, useRef, useState, RefObject } from "react";

import hotelsApi from "Api/hotelsApi";
import SearchLists from "./SearchLists";
import { SearchDescWrapper, StyledMap } from "./SearchDesc.styled";

declare global {
	interface Window {
		kakao: any;
	}
}

type Thotel = {
	id: number;
	name: string;
	price: number;
	img: string;
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

const KakaoMapScript = (mapRef: RefObject<HTMLDivElement>) => {
	const { kakao } = window;
	const container = mapRef.current;
	const latitude = 37.5659;
	const longitude = 126.9751;
	const options = {
		center: new kakao.maps.LatLng(latitude, longitude),
		level: 3,
	};
	const map = new kakao.maps.Map(container, options);
	const markerPosition = new kakao.maps.LatLng(latitude, longitude);
	const marker = new kakao.maps.Marker({
		position: markerPosition,
	});
	marker.setMap(map);
};

const SearchDesc = () => {
	const [hotels, setHotels] = useState<Thotel[]>([]);
	const [filteredHotels, setFilteredHotels] = useState<Thotel[]>([]);
	const mapRef = useRef<HTMLDivElement>(null);
	const searchListsProps = { hotels, filteredHotels, setFilteredHotels };

	const fetchHotels = async () => {
		const hotelsData = await hotelsApi.getHotels();
		setHotels(hotelsData);
	};

	useEffect(() => {
		fetchHotels();
		KakaoMapScript(mapRef);
	}, []);

	return (
		<SearchDescWrapper>
			<SearchLists props={searchListsProps} />
			<StyledMap ref={mapRef} />
		</SearchDescWrapper>
	);
};

export default SearchDesc;
export type { Thotel };

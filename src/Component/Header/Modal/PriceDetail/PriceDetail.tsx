import { useContext } from "react";
import { PriceContext } from "Context/PriceContext";

import StyledPriceDetail from "./PriceDetail.styled";

const UNIT = "￦";
const PRICE_RANGE = "가격 범위";

const getPriceType = (price: number, isUnit = false) => {
	const unit = isUnit ? UNIT : "";
	return unit + price.toLocaleString("ko-KR");
};

const PriceDetail = () => {
	const { min, max } = useContext(PriceContext);
	const minMoney = getPriceType(min, true);
	const maxMoney = getPriceType(max, true);
	const averageMoney = getPriceType(200000, true);
	const moneyRangeText = `${minMoney} - ${maxMoney}+`;
	const moneyAverageText = `평균 1박 요금은 ${averageMoney} 입니다`;

	return (
		<StyledPriceDetail>
			<div>{PRICE_RANGE}</div>
			<div>{moneyRangeText}</div>
			<div>{moneyAverageText}</div>
		</StyledPriceDetail>
	);
};

export default PriceDetail;

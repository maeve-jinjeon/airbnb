import { useContext } from "react";
import { PriceContext } from "Context/PriceContext";

import StyledPriceDetail from "./PriceDetail.styled";

const UNIT = "￦";
const PRICE_RANGE = "가격 범위";

const getPriceType = (price: number | undefined, isUnit = false) => {
	const unit = isUnit ? UNIT : "";
	const stringifiedPrice = price ? price.toLocaleString("ko-KR") : "";
	return unit + stringifiedPrice;
};

const PriceDetail = () => {
	const { min, max, avg } = useContext(PriceContext);
	const minMoney = getPriceType(min, true);
	const maxMoney = getPriceType(max, true);
	const averageMoney = getPriceType(avg, true);
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

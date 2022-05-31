const UNIT = "￦";
const PRICE_UNIT = 50000;
const DISTANCE_MIN_MAX = PRICE_UNIT * 2;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000;

const getPriceType = (price: number | undefined, isUnit = false) => {
	const unit = isUnit ? UNIT : "";
	const stringifiedPrice = price ? price.toLocaleString("ko-KR") : 0;
	return unit + stringifiedPrice;
};

export { PRICE_UNIT, DISTANCE_MIN_MAX, MAX_PRICE, MIN_PRICE, getPriceType };

const UNIT = "￦";

const getPriceType = (price: number | undefined, isUnit = false) => {
	const unit = isUnit ? UNIT : "";
	const stringifiedPrice = price ? price.toLocaleString("ko-KR") : 0;
	return unit + stringifiedPrice;
};

export default getPriceType;

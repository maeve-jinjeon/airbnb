const PRICE_UNIT = 50000;

const changePricePerUnit = (price, unitForDevide) => {
	const devidedPrice = price - (price % unitForDevide) + unitForDevide;
	return devidedPrice;
};

const getHotelsPrices = (hotels) => {
	const sum = hotels.reduce((prev, { price }) => prev + price, 0);
	const avg = Math.round(sum / (hotels.length - 1) / 100) * 100;
	const prices = {};

	hotels.forEach(({ price }) => {
		const changedPrice = changePricePerUnit(price, PRICE_UNIT);
		if (price >= 1000000) {
			prices[1000000] = prices[1000000] ? prices[1000000] + 1 : 1;
			return;
		}
		prices[changedPrice] = prices[changedPrice] ? prices[changedPrice] + 1 : 1;
	});

	return { prices, avg };
};

export default getHotelsPrices;

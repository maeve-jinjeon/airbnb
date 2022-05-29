const colors = {
	white: "#FFFFFF",
	grey6: "#F5F5F7",
	grey5: "#E0E0E0",
	grey4: "#BDBDBD",
	grey3: "#828282",
	grey3dark: "#4A4A4A",
	grey2: "#4F4F4F",
	grey1: "#333333",
	black: "#010101",
	primary: "#E84C60",
	green: "#118917",
};

const width = {
	header: "1200px",
	searchbar: "916px",
	GNBImg: "80px",
	schedule: "360px",
	scheduleChild: "112px",
	price: "256px",
	priceChild: "140px",
	guest: "192px",
	guestChild: "114px",
	guestModal: "400px",
};

const height = {
	GNB: "100px",
	header1: "640px",
	searchbar: "76px",
	guestModal: "355px",
};

const fontMain = {
	"font-family": '"IBM Plex Sans KR", sans-serif',
	"font-weight": 500,
};

const fontSize = {
	xSmall: "12px",
	small: "14px",
	medium: "16px",
	large: "18px",
	xLarge: "20px",
};

const fontWeight = {
	small: 400,
	medium: 600,
	large: 700,
};

const transition = {
	main: {
		"transition-property": "all",
		"transition-duration": "1s",
	},
	appear: {
		animation: "fade-in 0.4s",
		"animation-fill-mode": "forwards",
	},
	disappear: {
		animation: "fade-out 0.4s",
		"animation-fill-mode": "forwards",
	},
};

const setFont = (size, weight) => {
	return {
		"font-size": fontSize[size],
		"font-weight": fontWeight[weight],
	};
};

const theme = { colors, width, height, fontMain, transition, fontSize, fontWeight, setFont };

export default theme;

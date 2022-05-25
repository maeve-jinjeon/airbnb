const colors = {
	white: "#FFFFFF",
	grey6: "#F5F5F7",
	grey5: "#E0E0E0",
	grey4: "#BDBDBD",
	grey3: "#828282",
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
};

const height = {
	GNB: "100px",
	header1: "640px",
	searchbar: "76px",
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

const setFont = (size, weight) => {
	return {
		"font-size": fontSize[size],
		"font-weight": fontWeight[weight],
	};
};

const theme = { colors, width, height, fontMain, fontSize, fontWeight, setFont };

export default theme;

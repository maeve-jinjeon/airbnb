import { ThemeProvider } from "styled-components";
import theme from "Styles/theme";

import Reset from "Styles/Reset";
import Normalize from "Styles/Normalize";
import Header from "Component/Header/Header";
import { GuestsProvider } from "Context/GuestsContext";

const App = () => {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Reset />
				<Normalize />
				<GuestsProvider inner={<Header />} />
			</ThemeProvider>
		</div>
	);
};

export default App;

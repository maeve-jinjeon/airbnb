import { ThemeProvider } from "styled-components";
import theme from "Styles/theme";

import GlobalStyle from "Styles";
import Header from "Component/Header/Header";
import { GuestsProvider } from "Context/GuestsContext";
import { ModalProvider } from "Context/modalContext";

const App = () => {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<ModalProvider inner={<GuestsProvider inner={<Header />} />} />
			</ThemeProvider>
		</div>
	);
};

export default App;

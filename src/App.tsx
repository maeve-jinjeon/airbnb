import { ThemeProvider } from "styled-components";
import theme from "Styles/theme";

import GlobalStyle from "Styles";
import Header from "Component/Header/Header";
import { ContextsProvider } from "Context";

const App = () => {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<ContextsProvider>
					<Header />
				</ContextsProvider>
			</ThemeProvider>
		</div>
	);
};

export default App;

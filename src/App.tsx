import { ThemeProvider } from "styled-components";
import theme from "Styles/theme";

import GlobalStyle from "Styles";
import Header from "Component/Header/Header";
import { ScheduleProvider } from "Context/ScheduleContext";
import { PriceProvider } from "Context/PriceContext";
import { GuestsProvider } from "Context/GuestsContext";
import { ModalProvider } from "Context/modalContext";

const App = () => {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<ScheduleProvider
					inner={
						<PriceProvider
							inner={<ModalProvider inner={<GuestsProvider inner={<Header />} />} />}
						/>
					}
				/>
			</ThemeProvider>
		</div>
	);
};

export default App;

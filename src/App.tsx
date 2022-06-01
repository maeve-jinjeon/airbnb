import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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
					<BrowserRouter>
						<Routes>
							{/* <Route path="*" element={<NotFound />}/> */}
							<Route path="/" element={<Header />} />
						</Routes>
					</BrowserRouter>

					<Outlet />
					{/* 추후 Main part 생성 후 적용 */}
				</ContextsProvider>
			</ThemeProvider>
		</div>
	);
};

export default App;

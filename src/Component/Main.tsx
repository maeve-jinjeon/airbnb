import { Outlet } from "react-router-dom";

import { ContextsProvider } from "Context";
import Header from "./Header/Header";

const Main = () => {
	return (
		<ContextsProvider>
			<Header />
			<Outlet />
		</ContextsProvider>
	);
};

export default Main;

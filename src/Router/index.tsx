import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "Component/Header/Header";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="*" element={<NotFound />}/> */}
				<Route path="/" element={<Header />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;

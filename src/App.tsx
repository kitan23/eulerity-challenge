import { Sections } from "./components/Section";
import { About } from "./components/About";
import { Nav } from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

const AppStyle = styled.div`
	max-width: 960px;
	margin: 0 auto;
	padding: 0 20px;
	position: relative;
	height: 100vh;
`;

function App() {
	return (
		<AppStyle>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/home" element={<Sections />} />
					<Route path="/" element={<About />} />
				</Routes>
			</BrowserRouter>
		</AppStyle>
	);
}

export default App;

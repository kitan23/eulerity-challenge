import { NavStyle } from "./styles/Nav.style";
import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
	return (
		<NavStyle>
			<Link style={{ textDecoration: "none", color: "black" }} to="/">
				About
			</Link>
			<Link style={{ textDecoration: "none", color: "black" }} to="/home">
				Home
			</Link>
		</NavStyle>
	);
};

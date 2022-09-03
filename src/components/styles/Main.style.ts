import styled from "styled-components";

export const Main = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SearchBar = styled.input`
	height: 2rem;
	width: 50%;
	padding: 0 1rem;
	border-radius: 5px;
	border: 2px solid black;
	font-size: 1rem;
	background: #efb6b2;
`;

export const Button = styled.button`
	border-radius: 10px;
	cursor: pointer;
	height: 3rem;
	font-size: 1rem;
	background: #efb6b2;
	border: black solid 2px;
`;

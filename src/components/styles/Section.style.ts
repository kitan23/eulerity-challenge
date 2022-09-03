import styled from "styled-components";

export const Section = styled.section`
	color: var(--secondary);
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 40px;
	padding: 0 0 2rem 0;
`;

interface ContainerProps {
	background: string;
}
export const Container = styled.div<ContainerProps>`
	position: relative;
	height: 300px;
	width: 100%;
	transition: all 350ms ease;
	background: ${(props) => `url(${props.background})`};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	&:hover {
		transform: scale(1.1);
	}
`;

interface ButtonProps {
	position: string;
}
export const Button = styled.button<ButtonProps>`
	position: absolute;
	bottom: 0;
	z-index: inherit;
	${(props) => props.position}: 0;
	font-size: 1rem;
	padding: 0.5rem;
	border-top-right-radius: 0.5rem;
	transition: all 350ms ease;
`;

interface DisplayOverProps {
	selected: boolean;
}
export const DisplayOver = styled.div<DisplayOverProps>`
	height: 100%;
	width: 100%;
	color: white;
	background: ${(props) =>
		props.selected ? "rgba(4,59,92,0.7)" : "transparent"};
	transform: translate3d(0, -20px, 0);
	:hover {
		background-color: rgba(0, 0, 0, 0.5);
	}
`;

export const Title = styled.h2`
	text-transform: uppercase;
	padding: 0.5rem 0 0 0.5rem;
`;

export const Hover = styled.div`
	opacity: 0;
	transition: opacity 350ms ease;
	${Container}: hover & {
		opacity: 1;
	}
`;

export const Paragraph = styled.p`
	padding: 0 0.5rem;
	color: white;
	transform: translate3d(0, 50px, 0);
	transition: transform 350ms ease;

	${Container}:hover & {
		transform: translate3d(0, 0, 0);
	}
`;

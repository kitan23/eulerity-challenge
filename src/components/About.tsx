import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const About: React.FC = () => {
	return (
		<Container>
			<h1>About</h1>
			<h3>
				This is a gallery of cute animals and I hope it serves as a daily
				dose of positivity for you.
			</h3>
			<p>
				Hover on each image to see more details. After selecting your
				favourite images, click the download button.
			</p>
		</Container>
	);
};

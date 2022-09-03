import {
	Container,
	DisplayOver,
	Title,
	Paragraph,
	Hover,
	Button,
} from "./styles/Section.style";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

interface Props {
	item: {
		created: string;
		description: string;
		title: string;
		url: string;
		selected: boolean;
	};
	selectImage: (url: string) => void;
}

export const Poster: React.FC<Props> = ({
	item: { title, description, url, selected },
	selectImage,
}) => {
	const dispatch = useDispatch();

	return (
		<Container background={url}>
			<DisplayOver selected={selected}>
				<Hover>
					<Title>{title}</Title>
					<Paragraph>{description}</Paragraph>
				</Hover>
			</DisplayOver>
			{!selected ? (
				<Button
					position="left"
					onClick={() => {
						selectImage(url);
						dispatch(increment());
					}}
				>
					Select
				</Button>
			) : (
				<Button
					position="left"
					onClick={() => {
						selectImage(url);
						dispatch(decrement());
					}}
				>
					Unselect
				</Button>
			)}
		</Container>
	);
};

import { useEffect, useState } from "react";
import { Section } from "./styles/Section.style";
import { Poster } from "./Poster";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPetData, reset, incrementAll } from "../actions";
import { DataTypeExtended } from "../type";
import { useDebounce } from "../hooks/";
import { Main, SearchBar, Button } from "./styles/Main.style";
import { downloadAll } from "../utils/";

interface DataType {
	created: string;
	description: string;
	title: string;
	url: string;
}

export const Sections: React.FC = (props) => {
	const [data, setData] = useState<DataTypeExtended[]>([]);
	const API_URL = "https://eulerity-hackathon.appspot.com/pets";

	const retrievedData = useSelector((state: any) => state);
	const dispatch: any = useDispatch();
	const [search, setSearch] = useState<string>("");

	const debouncedSearch = useDebounce(search, 250);

	const fetchData = async () => {
		await axios
			.get(API_URL)
			.then((res) => {
				const result: DataTypeExtended[] = res.data.map(
					(item: DataType) => ({
						...item,
						selected: false,
					})
				);
				if (retrievedData.petData.length === 0) {
					setData(result);
					dispatch(setPetData(result));
				} else {
					setData(retrievedData.petData);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setSearch(debouncedSearch);
		searchData(debouncedSearch);
	}, [debouncedSearch]);

	const selectImage = (url: string) => {
		const res = data.map((item: DataTypeExtended) =>
			item.url === url ? { ...item, selected: !item.selected } : item
		);
		setData(res);

		const dataInStore = retrievedData.petData.map((item: DataTypeExtended) =>
			item.url === url ? { ...item, selected: !item.selected } : item
		);
		dispatch(setPetData(dataInStore));
	};

	const clearAll = () => {
		const res = data.map((item: DataTypeExtended) => ({
			...item,
			selected: false,
		}));
		setData(res);
		const storedData = retrievedData.petData.map(
			(item: DataTypeExtended) => ({ ...item, selected: false })
		);
		dispatch(setPetData(storedData));
	};

	const selectAll = () => {
		const res = data.map((item: DataTypeExtended) => ({
			...item,
			selected: true,
		}));
		setData(res);
		const temp = retrievedData.petData.map((item: DataTypeExtended) => ({
			...item,
			selected: true,
		}));
		const storedData = temp.map((item: DataTypeExtended) =>
			!res.find((item2) => item2.url == item.url)
				? { ...item, selected: false }
				: item
		);
		dispatch(setPetData(storedData));
	};

	const searchData = (searchValue: string) => {
		const res = retrievedData.petData.filter((item: DataTypeExtended) => {
			return Object.values(item)
				.join("")
				.toLowerCase()
				.includes(search.toLowerCase());
		});
		console.log(res);
		setData(res);
	};

	return (
		<Main>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "1rem",
				}}
			>
				<Button>Counter: {retrievedData.counter}</Button>
				<Button
					onClick={() => {
						downloadAll(data);
					}}
				>
					Download
				</Button>
				<SearchBar
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setSearch(e.target.value)
					}
					value={search}
					placeholder="Type to search"
				/>
				<Button
					onClick={() => {
						selectAll();
						dispatch(incrementAll(data.length));
					}}
				>
					Select All
				</Button>
				<Button
					onClick={() => {
						clearAll();
						dispatch(reset());
					}}
				>
					Clear Selection
				</Button>
			</div>

			<Section>
				{data.map((item: DataTypeExtended, index: number) => (
					<Poster item={item} key={index} selectImage={selectImage} />
				))}
			</Section>
		</Main>
	);
};

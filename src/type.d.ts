export type DataType = {
	created: string;
	description: string;
	title: string;
	url: string;
};

export type DataTypeExtended = {
	created: string;
	description: string;
	title: string;
	url: string;
	selected: boolean;
};
export type FetchPetAction = {
	type: string;
	payload: any;
};

import { DataTypeExtended } from "../type";
import { SET_DATA } from "../actions";

const initalState: DataTypeExtended[] = [];

export const petReducer = (state = initalState, action: any) => {
	switch (action.type) {
		case SET_DATA:
			return [...action.payload];
		default:
			return state;
	}
};

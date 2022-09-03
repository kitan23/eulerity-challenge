import { DataType } from "../type";

export const SET_DATA = "SET_DATA";
export const setPetData = (petData: DataType[]) => {
	return {
		type: SET_DATA,
		payload: petData,
	};
};

export const INCREMENT = "INCREMENT";
export const increment = () => {
	return {
		type: INCREMENT,
	};
};

export const DECREMENT = "DECREMENT";
export const decrement = () => {
	return {
		type: DECREMENT,
	};
};

export const RESET = "RESET";
export const reset = () => {
	return {
		type: RESET,
	};
};

export const INCREMENT_ALL = "INCREMENT_ALL";
export const incrementAll = (dataLength: number) => {
	return {
		type: INCREMENT_ALL,
		payload: dataLength,
	};
};

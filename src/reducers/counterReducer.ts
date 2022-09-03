import { INCREMENT, DECREMENT, RESET, INCREMENT_ALL } from "../actions/index";

export const counterReducer = (state = 0, action: any) => {
	switch (action.type) {
		case INCREMENT:
			return state + 1;
		case DECREMENT:
			return state - 1;
		case INCREMENT_ALL:
			return action.payload;
		case RESET:
			return 0;
		default:
			return state;
	}
};

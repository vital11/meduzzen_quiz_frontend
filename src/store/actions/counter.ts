import { Dispatch } from "redux";
import { CounterAction, CounterActionTypes } from "../../types/counter";

export const increment = (value: number) => {
	return function (dispatch: Dispatch<CounterAction>) {
		dispatch({
			type: CounterActionTypes.INCREMENT,
			payload: value,
		});
	};
};

export const decrement = (value: number) => {
	return function (dispatch: Dispatch<CounterAction>) {
		dispatch({
			type: CounterActionTypes.DECREMENT,
			payload: value,
		});
	};
};

export const reset = () => {
	return function (dispatch: Dispatch<CounterAction>) {
		dispatch({
			type: CounterActionTypes.RESET,
		});
	};
};

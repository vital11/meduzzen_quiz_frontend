import { CounterAction, CounterState, CounterActionTypes } from '../../types/counter';

export const initialCounterState: CounterState = {
    count: 0,
};

export const counterReducer = (state = initialCounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            return { ...state, count: state.count + Number(action.payload) };
        case CounterActionTypes.DECREMENT:
            return { ...state, count: state.count - Number(action.payload) };
        case CounterActionTypes.RESET:
            return { ...state, count: 0 };
        default:
            return state;
    };
};

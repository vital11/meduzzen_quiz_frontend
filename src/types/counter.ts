
export interface CounterState {
    count: number;
}

export enum CounterActionTypes {
    INCREMENT="INCREMENT",
    DECREMENT="DECREMENT",
    RESET="RESET",
}

interface FetchCounterIncrementAction {
    type: CounterActionTypes.INCREMENT;
    payload?: number;
}

interface FetchCounterDecrementAction {
    type: CounterActionTypes.DECREMENT;
    payload?: number;
}

interface FetchCounterResetAction {
    type: CounterActionTypes.RESET;
}


export type CounterAction = FetchCounterIncrementAction | FetchCounterDecrementAction | FetchCounterResetAction


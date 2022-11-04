import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { counterReducer } from './counterReducer';

export const rootReducer = combineReducers({
    users: usersReducer,
    counter: counterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

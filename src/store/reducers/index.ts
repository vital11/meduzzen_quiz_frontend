import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { counterReducer } from './counterReducer';


export const rootReducer = combineReducers({
    user: userReducer,
    counter: counterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

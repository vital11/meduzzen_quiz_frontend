import { combineReducers } from 'redux'
import { userReducer, usersReducer } from './userReducer'
import { counterReducer } from './counterReducer'

export const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>

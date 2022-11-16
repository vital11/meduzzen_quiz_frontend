import { combineReducers } from 'redux'
import { currentUserReducer, usersReducer } from './userReducer'
import { counterReducer } from './counterReducer'

export const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    user: currentUserReducer,
})

export type RootState = ReturnType<typeof rootReducer>

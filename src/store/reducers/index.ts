import { combineReducers } from 'redux'
import { currentUserReducer, usersReducer } from './userReducer'
import { counterReducer } from './counterReducer'
import { companiesReducer } from './companiesReducer'

export const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    user: currentUserReducer,
    companies: companiesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

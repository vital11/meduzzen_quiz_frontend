import { combineReducers } from 'redux'
import { counterReducer } from './counterReducer'
import { authReducer } from './authReducer'
import { userReducer } from './userReducer'
import { companyReducer } from './companyReducer'
import { membershipReducer } from './membershipReducer'


export const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    user: userReducer,
    company: companyReducer,
    membership: membershipReducer,
})

export type RootState = ReturnType<typeof rootReducer>

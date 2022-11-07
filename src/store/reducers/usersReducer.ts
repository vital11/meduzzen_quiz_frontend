import { TokenActionTypes, UserAction, UserState } from '../../types/auth'
import { UsersAction, UsersState, UsersActionTypes } from '../../types/user'


const initialUsersState: UsersState = {
    users: [],
    loading: false,
    error: null
}

export const usersReducer = (state = initialUsersState, action: UsersAction): UsersState => {
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS:
            return {loading: true, error: null, users: []}
        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case UsersActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state
    }
}


const initialUserState: UserState = {
    isAuth: false,
}

export const userReducer = (state = initialUserState, action: UserAction): UserState => {
    switch (action.type) {
        case TokenActionTypes.SET_TOKEN:
            return {
                ...state,
                isAuth: true
            }
        case TokenActionTypes.DEL_TOKEN:
            localStorage.removeItem("auth_token");
            localStorage.removeItem("auth_token_type");
            return {
                ...state,
                isAuth: false
            }
        default:
            return state
    }
}

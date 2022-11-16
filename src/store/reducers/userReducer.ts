import { UserAction, UserState, UserActionTypes } from '../../types/user'
import { UsersAction, UsersState, UsersActionTypes, IUser } from '../../types/user'


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
    currentUser: {} as IUser,
    isAuth: false
}

export const currentUserReducer = (state = initialUserState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case UserActionTypes.LOGOUT:
            localStorage.removeItem("auth_token")
            localStorage.removeItem("auth_token_type")
            return {
                ...state,
                currentUser: {} as IUser,
                isAuth: false
            }
        default:
            return state
    }
}

export const setUser = (currentUser: IUser) => ({type: UserActionTypes.SET_USER, payload: currentUser})
export const logoutUser = () => ({type: UserActionTypes.LOGOUT})

import { UsersAction, UsersState, UsersActionTypes, IUser, CurrentUserAction, CurrentUserState, CurrentUserActionTypes } from '../../types/user'


const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
}

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
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


const defaultState: CurrentUserState = {
    currentUser: {},
    isAuth: false,
}


export const currentUsersReducer = (state = defaultState, action: CurrentUserAction): CurrentUserState => {
    switch (action.type) {
        case CurrentUserActionTypes.LOG_IN:
            return {isAuth: true, currentUser: {}}
        case CurrentUserActionTypes.LOG_OUT:
            return {isAuth: false, currentUser: false}
        default:
            return state
    }
}
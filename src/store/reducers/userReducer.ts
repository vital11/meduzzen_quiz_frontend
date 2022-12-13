import { UserState, UserAction, UserActionTypes, UserError, UserLoading, IUser } from '../../types/user'


const initialUserState: UserState = {
    users: [],
    user: {} as IUser,
    userMe: {} as IUser,
    loading: {},
    error: {},
}

export const userReducer = (state = initialUserState, action: UserAction): UserState => {
    switch (action.type) {

        case UserActionTypes.FETCH_USERS:
            return {...state,
                error: { fetchUsersError: undefined },
                loading: { fetchUsersLoading: true }}    
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {...state,
                users: action.payload,
                loading: { fetchUsersLoading: false }}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state,
                error: { fetchUsersError: { message: action.payload }},
                loading: { fetchUsersLoading: false }}

        case UserActionTypes.FETCH_USER:
            return {...state,
                error: { fetchUserError: undefined },
                loading: { fetchUserLoading: true }}  
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {...state,
                user: action.payload,
                loading: { fetchUserLoading: false }}
        case UserActionTypes.FETCH_USER_ERROR:
            return {...state,
                error: { fetchUserError: { message: action.payload }},
                loading: { fetchUserLoading: false }}

        case UserActionTypes.ADD_USER:
            return {...state,
                error: { addUserError: undefined },
                loading: { addUserLoading: true }}  
        case UserActionTypes.ADD_USER_SUCCESS:
            return {...state,
                user: action.payload,
                users: [...state.users, action.payload],
                loading: { addUserLoading: false }}
        case UserActionTypes.ADD_USER_ERROR:
            return {...state,
                error: { addUserError: { message: action.payload }},
                loading: { addUserLoading: false }}

        case UserActionTypes.FETCH_USER_ME:
            return {...state,
                error: { fetchUserError: undefined },
                loading: { fetchUserMeLoading: true }}  
        case UserActionTypes.FETCH_USER_ME_SUCCESS:
            return {...state,
                userMe: action.payload,
                loading: { fetchUserMeLoading: false }}
        case UserActionTypes.FETCH_USER_ME_ERROR:
            return {...state,
                error: { fetchUserMeError: { message: action.payload }},
                loading: { fetchUserMeLoading: false }}

        case UserActionTypes.UPDATE_USER_ME:
            return {...state,
                error: { updateUserMeError: undefined },
                loading: { updateUserMeLoading: true }}  
        case UserActionTypes.UPDATE_USER_ME_SUCCESS:
            return {...state,
                userMe: action.payload,
                loading: { updateUserMeLoading: false }}
        case UserActionTypes.UPDATE_USER_ME_ERROR:
            return {...state,
                error: { updateUserMeError: { message: action.payload }},
                loading: { updateUserMeLoading: false }}

        case UserActionTypes.REMOVE_USER_ME:
            return {...state,
                error: { removeUserMeError: undefined },
                loading: { removeUserMeLoading: true }}  
        case UserActionTypes.REMOVE_USER_ME_SUCCESS:
            return {...state,
                users: state.users.filter(user => user.id !== action.payload.id),
                loading: { removeUserMeLoading: false }}
        case UserActionTypes.REMOVE_USER_ME_ERROR:
            return {...state,
                error: { removeUserMeError: { message: action.payload }},
                loading: { removeUserMeLoading: false }}

        default:
            return state
    }
}

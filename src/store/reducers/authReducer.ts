import { AuthAction, AuthActionTypes, AuthError, AuthLoading, AuthState } from "../../types/auth"
import { IUser } from "../../types/user"


const initialState: AuthState = {
    currentUser: {} as IUser,
    isAuth: false,
    loading: {},
    error: {},
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {

        case AuthActionTypes.SET_USER:
            return {...state,
                error: { setUserError: undefined },
                loading: { setUserLoading: true }}
        case AuthActionTypes.SET_USER_SUCCESS:
            return {...state,
                currentUser: action.payload,
                isAuth: true,
                loading: { setUserLoading: false }}
        case AuthActionTypes.SET_USER_ERROR:
            return {...state,
                error: { setUserError: { message: action.payload }},
                loading: { setUserLoading: false }}

        case AuthActionTypes.LOGIN:
            return {...state,
                error: { loginError: undefined },
                loading: { loginLoading: true }}
        case AuthActionTypes.LOGIN_SUCCESS:
            return {...state,
                loading: { loginLoading: false }}
        case AuthActionTypes.LOGIN_ERROR:
            return {...state,
                error: { loginError: { message: action.payload }},
                loading: { loginLoading: false }}

        case AuthActionTypes.LOGOUT:
            return {...state,
                currentUser: {} as IUser,
                isAuth: false }
                
        default:
            return state
    }
}

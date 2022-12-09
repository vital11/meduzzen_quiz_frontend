import { AxiosError } from "axios"
import { Dispatch } from "redux"
import { authAPI } from "../../api/authAPI"
import { userAPI } from "../../api/userAPI"
import { AuthAction, AuthActionTypes, UserAuth } from "../../types/auth"


export const authenticate = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({ type: AuthActionTypes.SET_USER })
            const userData = userAPI.readUserMe()
            dispatch({
                type: AuthActionTypes.SET_USER_SUCCESS,
                payload: await userData })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: AuthActionTypes.SET_USER_ERROR, 
                payload: error.message })
            localStorage.removeItem('auth_token')
            localStorage.removeItem('auth_token_type')
        }
    }
}

export const login = (data: UserAuth) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({ type: AuthActionTypes.LOGIN })
            const token = await authAPI.login(data)
            localStorage.setItem("auth_token", token.access_token)
            localStorage.setItem("auth_token_type", token.token_type)
            window.location.reload()
            // setTimeout(() => {
            //     window.location.reload()
            // }, 100)
            dispatch({ type: AuthActionTypes.LOGIN_SUCCESS })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: AuthActionTypes.LOGIN_ERROR, 
                payload: error.message })
        }
    }
}

export const logout = () => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch({ type: AuthActionTypes.LOGOUT })
        localStorage.removeItem("auth_token")
        localStorage.removeItem("auth_token_type")
    }
}

// export const logout = () => ({type: AuthActionTypes.LOGOUT})
// dispatch(logout())

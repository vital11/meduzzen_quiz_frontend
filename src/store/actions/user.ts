import { Dispatch } from "redux"
import { api, openApiFormData } from "../../api";
import { userAPI } from "../../api/userAPI";
import { IToken, UserAction } from "../../types/user";
import { IUser, UsersAction, UsersActionTypes } from "../../types/user";
import { setUser } from "../reducers/userReducer";
import { toast } from "react-toastify";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch({type: UsersActionTypes.FETCH_USERS})
            const data = userAPI.readUsers()
            dispatch({
                type: UsersActionTypes.FETCH_USERS_SUCCESS,
                payload: await data})
        } catch (e) {
            dispatch({
                type: UsersActionTypes.FETCH_USERS_ERROR, 
                payload: 'Error occurred while loading users.'})
        }
    }
}


interface FormData {
    username: string | Blob;
    password: string | Blob;
}

export const login = (loginForm: FormData) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await openApiFormData.post<IToken>('/login', loginForm)
            localStorage.setItem("auth_token", response.data.access_token)
            localStorage.setItem("auth_token_type", response.data.token_type)

            const user = await api.get<IUser>("/users/me/")
            dispatch(setUser(user.data))
            toast.success(user.status)
        } catch (e: any) {
            toast.error(e.response.status)
        }
    }
}

export const auth = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await api.get<IUser>("/users/me/")
            dispatch(setUser(response.data))
        } catch (e: any) {
            toast.error(e.response.status)
            localStorage.removeItem("auth_token")
            localStorage.removeItem("auth_token_type")
        }
    }
}

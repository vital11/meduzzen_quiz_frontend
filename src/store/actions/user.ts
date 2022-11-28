import { Dispatch } from "redux"
import { userAPI } from "../../api/userAPI";
import { UserAction } from "../../types/user";
import { UsersAction, UsersActionTypes } from "../../types/user";
import { setUserAC } from "../reducers/userReducer";


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


export const authenticate = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const data = await userAPI.readUserMe()
            dispatch(setUserAC(data))
        } catch (e: any) {
            console.log(e)
            localStorage.removeItem('auth_token')
            localStorage.removeItem('auth_token_type')
        }
    }
}


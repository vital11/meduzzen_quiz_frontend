import { Dispatch } from "redux"
import { userAPI } from "../../api/userAPI";
import { UsersAction, UsersActionTypes } from "../../types/user";


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

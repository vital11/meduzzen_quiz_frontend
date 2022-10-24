import axios from "axios"
import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/user"


const apiUrl: string = process.env.REACT_APP_API_URL!;

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get(apiUrl + '/users')
            // const response = await axios.get('http://127.0.0.1:8000/users')
            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: response.data})
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR, 
                payload: 'Error occurred while loading users.'})
        }
    }
}
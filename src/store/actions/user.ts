import { AxiosError } from "axios"
import { Dispatch } from "redux"
import { userAPI } from "../../api/userAPI"
import { IUserCreate, IUserUpdate } from "../../types/user"
import { UserAction, UserActionTypes } from "../../types/user"


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS })
            const data = userAPI.readUsers()
            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: await data })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR, 
                payload: error.message })
        }
    }
}

export const fetchUser = (id: number) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USER })
            const data = userAPI.readUser(id)
            dispatch({
                type: UserActionTypes.FETCH_USER_SUCCESS,
                payload: await data })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR, 
                payload: error.message })
        }
    }
}

export const addUser = (data: IUserCreate) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.ADD_USER })
            const user = userAPI.createUser(data)
            dispatch({
                type: UserActionTypes.ADD_USER_SUCCESS,
                payload: await user })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: UserActionTypes.ADD_USER_ERROR, 
                payload: error.message })
        }
    }
}

export const fetchUserMe = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USER_ME })
            const data = userAPI.readUserMe()
            dispatch({
                type: UserActionTypes.FETCH_USER_ME_SUCCESS,
                payload: await data })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: UserActionTypes.FETCH_USER_ME_ERROR, 
                payload: error.message })
        }
    }
}

export const updateUserMe = (updateForm: IUserUpdate) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.UPDATE_USER_ME })
            const userData = userAPI.updateUserMe(updateForm)
            dispatch({
                type: UserActionTypes.UPDATE_USER_ME_SUCCESS,
                payload: await userData })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: UserActionTypes.UPDATE_USER_ME_ERROR, 
                payload: error.message })
        }
    }
}

export const removeUserMe = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.REMOVE_USER_ME })
            const userData = userAPI.deleteUserMe()
            dispatch({
                type: UserActionTypes.REMOVE_USER_ME_SUCCESS,
                payload: await userData })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: UserActionTypes.REMOVE_USER_ME_ERROR, 
                payload: error.message })
        }
    }
}

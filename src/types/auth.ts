import { IUser, IUserCreate } from './user'


export interface IToken {
    access_token: string
    token_type: string
}

export type UserAuth = IUserCreate

interface AuthErrorMessage {
    message: string
    detail?: string
}

export interface AuthError {
    setUserError?: AuthErrorMessage
    loginError?: AuthErrorMessage
}

export interface AuthLoading {
    setUserLoading?: boolean
    loginLoading?: boolean
}

export interface AuthState {
    currentUser: IUser
    isAuth: boolean
    loading: AuthLoading
    error: AuthError
}

export enum AuthActionTypes {

    SET_USER = 'SET_USER',
    SET_USER_SUCCESS = 'SET_USER_SUCCESS',
    SET_USER_ERROR = 'SET_USER_ERROR',

    LOGIN = 'LOGIN',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_ERROR = 'LOGIN_ERROR',

    LOGOUT = 'LOGOUT',
}

interface SetUserAction {
    type: AuthActionTypes.SET_USER
}

interface SetUserSuccessAction {
    type: AuthActionTypes.SET_USER_SUCCESS
    payload: IUser
}

interface SetUserErrorAction {
    type: AuthActionTypes.SET_USER_ERROR
    payload: string
}

interface LoginAction {
    type: AuthActionTypes.LOGIN
}

interface LoginSuccessAction {
    type: AuthActionTypes.LOGIN_SUCCESS
}

interface LoginErrorAction {
    type: AuthActionTypes.LOGIN_ERROR
    payload: string
}

interface LogoutAction {
    type: AuthActionTypes.LOGOUT
}

export type AuthAction =

    SetUserAction
    | SetUserSuccessAction
    | SetUserErrorAction

    | LoginAction
    | LoginSuccessAction
    | LoginErrorAction

    | LogoutAction


export interface IUserCreate {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    password?: string
}

export interface IUser {
    email: string
    name: string | null
    is_active: boolean
    is_superuser: boolean
    id: number
}

export interface UserProps {
    id: number
}

interface UserErrorMessage {
    message: string
    detail?: string
}

export interface UserError {
    fetchUsersError?: UserErrorMessage | null
    fetchUserError?: UserErrorMessage | null
    fetchUserMeError?: UserErrorMessage | null
    addUserError?: UserErrorMessage | null
    updateUserMeError?: UserErrorMessage | null
    removeUserMeError?: UserErrorMessage | null
}

export interface UserLoading {
    fetchUsersLoading?: boolean
    fetchUserLoading?: boolean
    fetchUserMeLoading?: boolean
    addUserLoading?: boolean
    updateUserMeLoading?: boolean
    removeUserMeLoading?: boolean
}

export interface UserState {
    users: IUser[]
    user: IUser
    userMe: IUser
    loading: UserLoading
    error: UserError
}

export enum UserActionTypes {

    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',

    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',

    ADD_USER = 'ADD_USER',
    ADD_USER_SUCCESS = 'ADD_USER_SUCCESS',
    ADD_USER_ERROR = 'ADD_USER_ERROR',

    FETCH_USER_ME = 'FETCH_USER_ME',
    FETCH_USER_ME_SUCCESS = 'FETCH_USER_ME_SUCCESS',
    FETCH_USER_ME_ERROR = 'FETCH_USER_ME_ERROR',

    UPDATE_USER_ME = 'UPDATE_USER_ME',
    UPDATE_USER_ME_SUCCESS = 'UPDATE_USER_ME_SUCCESS',
    UPDATE_USER_ME_ERROR = 'UPDATE_USER_ME_ERROR',

    REMOVE_USER_ME = 'REMOVE_USER_ME',
    REMOVE_USER_ME_SUCCESS = 'REMOVE_USER_ME_SUCCESS',
    REMOVE_USER_ME_ERROR = 'REMOVE_USER_ME_ERROR',
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: IUser[]
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USER
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS
    payload: IUser
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR
    payload: string
}

interface AddUserAction {
    type: UserActionTypes.ADD_USER
}

interface AddUserSuccessAction {
    type: UserActionTypes.ADD_USER_SUCCESS
    payload: IUser
}

interface AddUserErrorAction {
    type: UserActionTypes.ADD_USER_ERROR
    payload: string
}

interface FetchUserMeAction {
    type: UserActionTypes.FETCH_USER_ME
}

interface FetchUserMeSuccessAction {
    type: UserActionTypes.FETCH_USER_ME_SUCCESS
    payload: IUser
}

interface FetchUserMeErrorAction {
    type: UserActionTypes.FETCH_USER_ME_ERROR
    payload: string
}

interface UpdateUserMeAction {
    type: UserActionTypes.UPDATE_USER_ME
}

interface UpdateUserMeSuccessAction {
    type: UserActionTypes.UPDATE_USER_ME_SUCCESS
    payload: IUser
}

interface UpdateUserMeErrorAction {
    type: UserActionTypes.UPDATE_USER_ME_ERROR
    payload: string
}

interface RemoveUserMeAction {
    type: UserActionTypes.REMOVE_USER_ME
}

interface RemoveUserMeSuccessAction {
    type: UserActionTypes.REMOVE_USER_ME_SUCCESS
    payload: IUser
}

interface RemoveUserMeErrorAction {
    type: UserActionTypes.REMOVE_USER_ME_ERROR
    payload: string
}

export type UserAction = 

    FetchUsersAction
    | FetchUsersSuccessAction
    | FetchUsersErrorAction

    | FetchUserAction
    | FetchUserSuccessAction
    | FetchUserErrorAction

    | AddUserAction
    | AddUserSuccessAction
    | AddUserErrorAction

    | FetchUserMeAction
    | FetchUserMeSuccessAction
    | FetchUserMeErrorAction

    | UpdateUserMeAction
    | UpdateUserMeSuccessAction
    | UpdateUserMeErrorAction

    | RemoveUserMeAction
    | RemoveUserMeSuccessAction
    | RemoveUserMeErrorAction

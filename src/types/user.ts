
export interface IUserCreate {
    email: string;
    password: string;
}

export interface IUserUpdate {
    name: string | null;
    password: string;
}

export interface IUser {
    email: string;
    name: string | null;
    is_active: boolean;
    is_superuser: boolean;
    id: number;
}

export interface UsersState {
    users: IUser[];
    loading: boolean;
    error: null | string;
}

export enum UsersActionTypes {
    FETCH_USERS="FETCH_USERS",
    FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR="FETCH_USERS_ERROR",
}

interface FetchUsersAction {
    type: UsersActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: UsersActionTypes.FETCH_USERS_SUCCESS;
    payload: IUser[];
}

interface FetchUsersErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UsersAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction


export interface CurrentUserState {
    currentUser: {};
    isAuth: boolean;
}

export enum CurrentUserActionTypes {
    LOG_IN="LOG_IN",
    LOG_OUT="LOG_OUT",
}

interface FetchCurrentUserLoginAction {
    type: CurrentUserActionTypes.LOG_IN;
    payload?: boolean;
}

interface FetchCurrentUserLogoutAction {
    type: CurrentUserActionTypes.LOG_OUT;
    payload?: boolean;
}

export type CurrentUserAction = FetchCurrentUserLoginAction | FetchCurrentUserLogoutAction

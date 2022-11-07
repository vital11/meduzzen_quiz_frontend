
export interface IUser {
    email: string;
    name: string | null;
    is_active: boolean;
    is_superuser: boolean;
    id?: number;
}

export interface IUserUpdate {
    email?: string;
    name?: string;
    is_active?: boolean;
    is_superuser?: boolean;
    password?: string;
}

export interface IUserCreate {
    email: string;
    name?: string;
    is_active?: boolean;
    is_superuser?: boolean;
    password?: string;
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


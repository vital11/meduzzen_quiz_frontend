
export interface IToken {
    access_token: string;
    token_type: string;
}

export enum TokenActionTypes {
    SET_TOKEN = "SET_TOKEN",
    DEL_TOKEN = "DEL_TOKEN",
}

interface LoginAction {
    type: TokenActionTypes.SET_TOKEN;
    payload: IToken;
}

interface LogoutAction {
    type: TokenActionTypes.DEL_TOKEN;
}

export type UserAction = LoginAction | LogoutAction

export interface UserState {
    isAuth: boolean
}

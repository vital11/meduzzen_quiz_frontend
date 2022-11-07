import { IToken, TokenActionTypes } from "../../types/auth"


export const login = (token: IToken) => ({type: TokenActionTypes.SET_TOKEN, payload: token})
export const logout = () => ({type: TokenActionTypes.DEL_TOKEN})
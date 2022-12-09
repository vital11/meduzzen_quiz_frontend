import { openApi } from "."
import { UserAuth, IToken } from "../types/auth"


export const authAPI = {

    async login(loginForm: UserAuth) {
        return await openApi.post<IToken>('/login', loginForm).then(response => response.data)
    },
}

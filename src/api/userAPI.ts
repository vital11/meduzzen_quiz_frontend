import { api, openApi } from ".";
import { IToken, IUser, IUserCreate, IUserUpdate } from "../types/user";


export const userAPI = {

    async readUsers() {
        return await api.get<IUser[]>('/users').then(response => response.data)
    },

    async readUser(id: string) {
        return await api.get<IUser>(`/users/${id}`).then(response => response.data)
    },

    async updateUser(id: string, updateForm?: IUserUpdate) {
        return await api.patch<IUser>(`/users/${id}`, updateForm).then(response => response.data)
    },

    async deleteUser(id: string) {
        return await api.delete<IUser>(`/users/${id}`).then(response => response.data)
    },

    async createUser(registerForm?: IUserCreate) {
        return await openApi.post<IUser>('/users/', registerForm).then(response => response.data)
    },

    async login(loginForm?: IUserCreate) {
        return await openApi.post<IToken>('/login', loginForm).then(response => response.data)
    },

    async readUserMe() {
        return await api.get<IUser>('/users/me/').then(response => response.data)
    },

    async updateUserMe(updateForm?: IUserUpdate) {
        return await api.patch<IUser>('/users/me/', updateForm).then(response => response.data)
    },

    async deleteUserMe() {
        return await api.delete<IUser>('/users/me/').then(response => response.data)
    },

}


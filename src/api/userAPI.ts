import { api, openApi } from "."
import { IUser, IUserCreate, IUserUpdate } from "../types/user"


export const userAPI = {

    async readUsers() {
        return await api.get<IUser[]>('/users').then(response => response.data)
    },

    async readUser(id: number) {
        return await api.get<IUser>(`/users/${id}`).then(response => response.data)
    },

    async createUser(registerForm: IUserCreate) {
        return await openApi.post<IUser>('/users/', registerForm).then(response => response.data)
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

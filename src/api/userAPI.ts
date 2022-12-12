import { api, openApi } from "."
import { IUser, IUserCreate, IUserUpdate } from "../types/user"


export const userAPI = {

    async readUsers(): Promise<IUser[]> {
        return await api.get<IUser[]>('/users').then(response => response.data)
    },

    async readUser(id: number): Promise<IUser> {
        return await api.get<IUser>(`/users/${id}`).then(response => response.data)
    },

    async createUser(registerForm: IUserCreate): Promise<IUser> {
        return await openApi.post<IUser>('/users/', registerForm).then(response => response.data)
    },

    async readUserMe(): Promise<IUser> {
        return await api.get<IUser>('/users/me/').then(response => response.data)
    },

    async updateUserMe(updateForm?: IUserUpdate): Promise<IUser> {
        return await api.patch<IUser>('/users/me/', updateForm).then(response => response.data)
    },

    async deleteUserMe(): Promise<IUser> {
        return await api.delete<IUser>('/users/me/').then(response => response.data)
    },
}

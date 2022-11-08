import { Dispatch, SetStateAction } from "react";
import { api, openApi } from ".";
import { IUser, IUserCreate, IUserUpdate } from "../types/user";


export const userAPI = {

    async readUsers() {
        return await api.get<IUser[]>('/users').then(response => response.data);
    },

    async readUser(id: string, setUser: Dispatch<SetStateAction<IUser | undefined>>) {
        try {
            const response = await api.get<IUser>(`/users/${id}`)
            setUser(response.data);
        } catch (e) {
            console.log(e);
        }
    },

    async createUser(email: string, password: string) {
        try {
            const response = await openApi.post<IUserCreate>('/users/', {
                email,
                password,
            })
            alert(response.data.email);
        } catch (e) {
            alert(e);
        }
    },

    async updateUser(id: string, name: string, password: string) {
        try {
            const response = await api.patch<IUserUpdate>(`/users/${id}`, {
                name,
                password,
            })
            alert(response.data);
        } catch (e) {
            alert(e);
        }
    },

    async deleteUser(id: string) {
        try {
            const response = await api.delete<IUser>(`/users/${id}`)
            alert(response.data.email);
        } catch (e) {
            alert(e);
        }
    },

    async readUserMe(setUser: Dispatch<SetStateAction<IUser | undefined>>) {
        try {
            const response = await api.get<IUser>(`/users/me/`)
            console.log(response.data)
            setUser(response.data);
        } catch (e) {
            console.log(e);
        }
    },
}



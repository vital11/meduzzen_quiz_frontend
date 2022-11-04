import { api, apiAuth } from ".";
import { IUser, IUserCreate, IUserUpdate } from "../types/user";


export const userAPI = {

    async readUsers() {
        return await api.get<IUser[]>('/users').then(response => response.data);
    },

    async readUser(id: string | undefined, setUser: any) {
        try {
            const response = await api.get<IUser>(`/users/${id}`)
            setUser(response.data);
        } catch (e) {
            console.log(e);
        }
    },

    async createUser(email: string, password: string) {
        try {
            const response = await apiAuth.post<IUser>('/users/', {
                email,
                password,
            })
            alert(response.data.email);
        } catch (e) {
            alert(e);
        }
    },

    async updateUser(id: string | undefined, name: string, password: string) {
        try {
            const response = await api.patch<IUser>(`/users/${id}`, {
                name,
                password,
            })
            alert(response.data);
        } catch (e) {
            alert(e);
        }
    },

    async deleteUser(id: string | undefined) {
        try {
            const response = await api.delete<IUser>(`/users/${id}`)
            alert(response.data.email);
        } catch (e) {
            alert(e);
        }
    },
}


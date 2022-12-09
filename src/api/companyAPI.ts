import { api } from "."
import { ICompany, ICompanyCreate, ICompanyUpdate } from "../types/company"


export const companyAPI = {

    async readCompanies() {
        return await api.get<ICompany[]>('/companies').then(response => response.data)
    },

    async readCompany(id: number) {
        return await api.get<ICompany>(`/companies/${id}`).then(response => response.data)
    },

    async createCompany(createForm: ICompanyCreate) {
        return await api.post<ICompany>('/companies/', createForm).then(response => response.data)
    },

    async updateCompany(id: number, updateForm: ICompanyUpdate) {
        return await api.patch<ICompany>(`/companies/${id}`, updateForm).then(response => response.data)
    },

    async deleteCompany(id: number) {
        return await api.delete<ICompany>(`/companies/${id}`).then(response => response.data)
    },

    async readCompaniesMeOwner() {
        return await api.get<ICompany[]>('/companies/me/owner').then(response => response.data)
    },
}

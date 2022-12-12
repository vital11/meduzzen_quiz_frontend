import { api } from "."
import { ICompany, ICompanyCreate, ICompanyUpdate } from "../types/company"


export const companyAPI = {

    async readCompanies(): Promise<ICompany[]> {
        return await api.get<ICompany[]>('/companies').then(response => response.data)
    },

    async readCompaniesMe(): Promise<ICompany[]> {
        return await api.get<ICompany[]>('/companies/me/').then(response => response.data)
    },

    async readCompany(id: number): Promise<ICompany> {
        return await api.get<ICompany>(`/companies/${id}`).then(response => response.data)
    },

    async createCompany(createForm: ICompanyCreate): Promise<ICompany> {
        return await api.post<ICompany>('/companies/', createForm).then(response => response.data)
    },

    async updateCompany(id: number, updateForm: ICompanyUpdate): Promise<ICompany> {
        return await api.patch<ICompany>(`/companies/${id}`, updateForm).then(response => response.data)
    },

    async deleteCompany(id: number): Promise<ICompany> {
        return await api.delete<ICompany>(`/companies/${id}`).then(response => response.data)
    },


}

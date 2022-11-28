import { api } from "."
import { ICompany, ICompanyCreate, ICompanyUpdate, ICompanyMembership } from "../types/companies"


export const companyAPI = {

    async readCompanies() {
        return await api.get<ICompany[]>('/companies').then(response => response.data)
    },

    async readCompany(id: string) {
        return await api.get<ICompany>(`/companies/${id}`).then(response => response.data)
    },

    async createCompany(createForm?: ICompanyCreate) {
        return await api.post<ICompany>('/companies/', createForm).then(response => response.data)
    },

    async updateCompany(id: string, updateForm?: ICompanyUpdate) {
        return await api.patch<ICompany>(`/companies/${id}`, updateForm).then(response => response.data)
    },

    async deleteCompany(id: string) {
        return await api.delete<ICompany>(`/companies/${id}`).then(response => response.data)
    },

    async readCompaniesMeOwner() {
        return await api.get<ICompany[]>('/users/me/companies/owner/').then(response => response.data)
    },

    async createMembership(membershipForm?: ICompanyMembership) {
        return await api.post<ICompanyMembership>('/companies/memberships/', membershipForm).then(response => response.data)
    },

    async readMemberships(params?: ICompanyMembership) {
        return await api.get<ICompanyMembership[]>('/companies/memberships/', { params }).then(response => response.data)
    },

    async deleteMembership(id: string) {
        return await api.post<ICompanyMembership>(`/companies/memberships/${id}`).then(response => response.data)
    },
}


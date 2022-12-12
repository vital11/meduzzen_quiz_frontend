import { api } from "."
import { IMember, IMembership, IMembershipCreate, MembershipParams } from "../types/membership"


export const membershipAPI = {

    async createMembership(membershipForm: IMembershipCreate): Promise<IMembership> {
        return await api.post<IMembership>('/memberships/', membershipForm).then(response => response.data)
    },

    async readMemberships(params: MembershipParams): Promise<IMembership[]> {
        return await api.get<IMembership[]>('/memberships/', { params }).then(response => response.data)
    },

    async deleteMembership(id: number): Promise<IMembership> {
        return await api.delete<IMembership>(`/memberships/${id}`).then(response => response.data)
    },

    async createMember(membership: IMembership): Promise<IMember> {
        return await api.post<IMember>('/members/', membership).then(response => response.data)
    },

    async readCompanyMembers(company_id: number): Promise<IMember[]> {
        return await api.get<IMember[]>(`/members/companies/${company_id}`).then(response => response.data)
    },

    async readMemberCompanies(user_id: number): Promise<IMember[]> {
        return await api.get<IMember[]>(`/members/users/${user_id}`).then(response => response.data)
    },
}

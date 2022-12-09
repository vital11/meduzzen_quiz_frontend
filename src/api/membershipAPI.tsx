import { api } from "."
import { IMember, IMembership, IMembershipCreate, MembershipParams } from "../types/membership"


export const membershipAPI = {

    async createMembership(membershipForm: IMembershipCreate) {
        return await api.post<IMembership>('/memberships/', membershipForm).then(response => response.data)
    },

    async readMemberships(params: MembershipParams) {
        return await api.get<IMembership[]>('/memberships/', { params }).then(response => response.data)
    },

    async deleteMembership(id: number) {
        return await api.delete<IMembership>(`/memberships/${id}`).then(response => response.data)
    },

    async createMember(membership: IMembership) {
        return await api.post<IMember>('/members/', membership).then(response => response.data)
    },

    async readCompanyMembers(id: number) {
        return await api.get<IMember[]>(`/members/companies/${id}`).then(response => response.data)
    },

    async readMemberCompanies(id: number) {
        return await api.get<IMember[]>(`/members/users/${id}`).then(response => response.data)
    },
}

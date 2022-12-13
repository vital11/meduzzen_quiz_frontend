import { AxiosError } from "axios"
import { Dispatch } from "redux"
import { membershipAPI } from "../../api/membershipAPI"
import { IMembership, IMembershipCreate, MembershipAction, MembershipActionTypes, MembershipTypes, IMember, IMemberUpdate, } from "../../types/membership"


export const addInvite = (data: IMembershipCreate) => {
    return async (dispatch: Dispatch<MembershipAction>) => {
        try {
            dispatch({ type: MembershipActionTypes.ADD_INVITE })
            const invite = await membershipAPI.createMembership(data)
            dispatch({
                type: MembershipActionTypes.ADD_INVITE_SUCCESS,
                payload: invite })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: MembershipActionTypes.ADD_INVITE_ERROR, 
                payload: error.message })
        }
    }
}

export const addRequest = (data: IMembershipCreate) => {
    return async (dispatch: Dispatch<MembershipAction>) => {
        try {
            dispatch({ type: MembershipActionTypes.ADD_REQUEST })
            const request = await membershipAPI.createMembership(data)
            dispatch({
                type: MembershipActionTypes.ADD_REQUEST_SUCCESS,
                payload: request })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: MembershipActionTypes.ADD_REQUEST_ERROR, 
                payload: error.message })
        }
    }
}

export const fetchInvites = (company_id?: number) => {
    return async (dispatch: Dispatch<MembershipAction>) => {
        try {
            dispatch({ type: MembershipActionTypes.FETCH_INVITES })
            const invites = await membershipAPI.readMemberships({
                membership_type: MembershipTypes.INVITE,
                company_id: company_id
            })
            dispatch({
                type: MembershipActionTypes.FETCH_INVITES_SUCCESS,
                payload: invites })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: MembershipActionTypes.FETCH_INVITES_ERROR, 
                payload: error.message })
        }
    }
}

export const fetchRequests = (company_id?: number) => {
    return async (dispatch: Dispatch<MembershipAction>) => {
        try {
            dispatch({ type: MembershipActionTypes.FETCH_REQUESTS })
            const requests = await membershipAPI.readMemberships({
                membership_type: MembershipTypes.REQUEST,
                company_id: company_id
            })
            dispatch({
                type: MembershipActionTypes.FETCH_REQUESTS_SUCCESS,
                payload: requests })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: MembershipActionTypes.FETCH_REQUESTS_ERROR, 
                payload: error.message })
        }
    }
}

export const removeInvite = (membership: IMembership) => {
    return async (dispatch: Dispatch<MembershipAction>) => {
        try {
            dispatch({ type: MembershipActionTypes.REMOVE_INVITE })
            const invite = await membershipAPI.deleteMembership(membership.membership_id)
            dispatch({
                type: MembershipActionTypes.REMOVE_INVITE_SUCCESS,
                payload: invite })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: MembershipActionTypes.REMOVE_INVITE_ERROR, 
                payload: error.message })
        }
    }
}

export const removeRequest = (membership: IMembership) => {
    return async (dispatch: Dispatch<MembershipAction>) => {
        try {
            dispatch({ type: MembershipActionTypes.REMOVE_REQUEST })
            const request = await membershipAPI.deleteMembership(membership.membership_id)
            dispatch({
                type: MembershipActionTypes.REMOVE_REQUEST_SUCCESS,
                payload: request })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: MembershipActionTypes.REMOVE_REQUEST_ERROR, 
                payload: error.message })
        }
    }
}

export const addMember = (membership: IMembership) => {
    return async (dispatch: Dispatch<MembershipAction>) => {
        try {
            dispatch({ type: MembershipActionTypes.ADD_MEMBER })
            const member = await membershipAPI.createMember(membership)
            dispatch({
                type: MembershipActionTypes.ADD_MEMBER_SUCCESS,
                payload: member })
            dispatch({
                type: MembershipActionTypes.REMOVE_INVITE_SUCCESS,
                payload: membership })
            dispatch({
                type: MembershipActionTypes.REMOVE_REQUEST_SUCCESS,
                payload: membership })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: MembershipActionTypes.ADD_MEMBER_ERROR, 
                payload: error.message })
        }
    }
}

export const fetchCompanyMembers = (company_id: number) => {
    return async (dispatch: Dispatch<MembershipAction>) => {
        try {
            dispatch({ type: MembershipActionTypes.FETCH_MEMBERS })
            const companyMembers  = await membershipAPI.readCompanyMembers(company_id)
            dispatch({
                type: MembershipActionTypes.FETCH_MEMBERS_SUCCESS,
                payload: companyMembers })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: MembershipActionTypes.FETCH_MEMBERS_ERROR, 
                payload: error.message })
        }
    }
}

export const fetchMemberCompanies = (user_id: number) => {
    return async (dispatch: Dispatch<MembershipAction>) => {
        try {
            dispatch({ type: MembershipActionTypes.FETCH_MEMBERS })
            const memberCompanies  = await membershipAPI.readMemberCompanies(user_id)
            dispatch({
                type: MembershipActionTypes.FETCH_MEMBERS_SUCCESS,
                payload: memberCompanies })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: MembershipActionTypes.FETCH_MEMBERS_ERROR, 
                payload: error.message })
        }
    }
}

export const toggleMemberAdminRole = (member: IMemberUpdate) => {
    return async (dispatch: Dispatch<MembershipAction>) => {
        try {
            dispatch({ type: MembershipActionTypes.TOGGLE_MEMBER_ADMIN_ROLE })
            const company = await membershipAPI.updateMember(member)
            dispatch({
                type: MembershipActionTypes.TOGGLE_MEMBER_ADMIN_ROLE_SUCCESS,
                payload: company })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: MembershipActionTypes.TOGGLE_MEMBER_ADMIN_ROLE_ERROR, 
                payload: error.message })
        }
    }
}

export const removeMember = (member: IMember) => {
    return async (dispatch: Dispatch<MembershipAction>) => {
        try {
            dispatch({ type: MembershipActionTypes.REMOVE_MEMBER })
            const memberData = await membershipAPI.deleteMember(member.m_id)
            dispatch({
                type: MembershipActionTypes.REMOVE_MEMBER_SUCCESS,
                payload: memberData })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: MembershipActionTypes.REMOVE_MEMBER_ERROR, 
                payload: error.message })
        }
    }
}

import { AxiosError } from "axios"
import { Dispatch } from "redux"
import { membershipAPI } from "../../api/membershipAPI"
import { IMembershipCreate, MembershipAction, MembershipActionTypes, MembershipParams } from "../../types/membership"


export const addInvite = (data: IMembershipCreate) => {
    return async (dispatch: Dispatch<MembershipAction>) => {
        try {
            dispatch({ type: MembershipActionTypes.ADD_INVITE })
            const invite = membershipAPI.createMembership(data)
            dispatch({
                type: MembershipActionTypes.ADD_INVITE_SUCCESS,
                payload: await invite })
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
            const request = membershipAPI.createMembership(data)
            dispatch({
                type: MembershipActionTypes.ADD_REQUEST_SUCCESS,
                payload: await request })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: MembershipActionTypes.ADD_REQUEST_ERROR, 
                payload: error.message })
        }
    }
}

export const fetchInvites = (params: MembershipParams) => {
    return async (dispatch: Dispatch<MembershipAction>) => {
        try {
            dispatch({ type: MembershipActionTypes.FETCH_INVITES })
            const invites = membershipAPI.readMemberships(params)
            dispatch({
                type: MembershipActionTypes.FETCH_INVITES_SUCCESS,
                payload: await invites })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: MembershipActionTypes.FETCH_INVITES_ERROR, 
                payload: error.message })
        }
    }
}

export const fetchRequests = (params: MembershipParams) => {
    return async (dispatch: Dispatch<MembershipAction>) => {
        try {
            dispatch({ type: MembershipActionTypes.FETCH_REQUESTS })
            const requests = membershipAPI.readMemberships(params)
            dispatch({
                type: MembershipActionTypes.FETCH_REQUESTS_SUCCESS,
                payload: await requests })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: MembershipActionTypes.FETCH_REQUESTS_ERROR, 
                payload: error.message })
        }
    }
}
import { IMember, MembershipAction, MembershipActionTypes, MembershipError, MembershipLoading, MembershipState } from '../../types/membership'


const initialState: MembershipState = {
    invites: [],
    requests: [],
    members: [],
    member: {} as IMember,
    loading: {} as MembershipLoading,
    error: {} as MembershipError,
}

export const membershipReducer = (state = initialState, action: MembershipAction): MembershipState => {
    switch (action.type) {

        case MembershipActionTypes.ADD_INVITE:
            return {...state,
                error: { addInviteError: null },
                loading: { addInviteLoading: true }}  
        case MembershipActionTypes.ADD_INVITE_SUCCESS:
            return {...state,
                invites: [...state.invites, action.payload],
                loading: { addInviteLoading: false }}
        case MembershipActionTypes.ADD_INVITE_ERROR:
            return {...state,
                error: { addInviteError: { message: action.payload }},
                loading: { addInviteLoading: false }}

        case MembershipActionTypes.ADD_REQUEST:
            return {...state,
                error: { addRequestError: null },
                loading: { addRequestLoading: true }}  
        case MembershipActionTypes.ADD_REQUEST_SUCCESS:
            return {...state,
                requests: [...state.invites, action.payload],
                loading: { addRequestLoading: false }}
        case MembershipActionTypes.ADD_REQUEST_ERROR:
            return {...state,
                error: { addRequestError: { message: action.payload }},
                loading: { addRequestLoading: false }}

        case MembershipActionTypes.FETCH_INVITES:
            return {...state,
                loading: { addInviteLoading: true },
                error: { addInviteError: null },
                invites: [] }
        case MembershipActionTypes.FETCH_INVITES_SUCCESS:
            return {...state,
                loading: { addInviteLoading: false },
                invites: [...state.invites, ...action.payload]}
        case MembershipActionTypes.FETCH_INVITES_ERROR:
            return {...state,
                loading: { addInviteLoading: false },
                error: { addInviteError: { message: action.payload }}}

        case MembershipActionTypes.FETCH_REQUESTS:
            return {...state,
                error: { addRequestError: null },
                loading: { addRequestLoading: true },
                requests: [] }  
        case MembershipActionTypes.FETCH_REQUESTS_SUCCESS:
            return {...state,
                requests: [...state.invites, ...action.payload],
                loading: { addRequestLoading: false }}
        case MembershipActionTypes.FETCH_REQUESTS_ERROR:
            return {...state,
                error: { addRequestError: { message: action.payload }},
                loading: { addRequestLoading: false }}

        default:
            return state
    }
}


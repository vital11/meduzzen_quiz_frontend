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
                requests: [...state.requests, ...action.payload],
                loading: { addRequestLoading: false }}
        case MembershipActionTypes.FETCH_REQUESTS_ERROR:
            return {...state,
                error: { addRequestError: { message: action.payload }},
                loading: { addRequestLoading: false }}

        case MembershipActionTypes.REMOVE_INVITE:
            return {...state,
                loading: { removeInviteLoading: true },
                error: { removeInviteError: null }}
        case MembershipActionTypes.REMOVE_INVITE_SUCCESS:
            return {...state,
                loading: { removeInviteLoading: false },
                invites: state.invites.filter(invite => (
                    invite.company_id !== action.payload.company_id || invite.user_id !== action.payload.user_id ))}
        case MembershipActionTypes.REMOVE_INVITE_ERROR:
            return {...state,
                loading: { removeInviteLoading: false },
                error: { removeInviteError: { message: action.payload }}}

        case MembershipActionTypes.REMOVE_REQUEST:
            return {...state,
                loading: { removeRequestLoading: true },
                error: { removeRequestError: null }}
        case MembershipActionTypes.REMOVE_REQUEST_SUCCESS:
            return {...state,
                loading: { removeRequestLoading: false },
                requests: state.requests.filter(request => (
                    request.company_id !== action.payload.company_id || request.user_id !== action.payload.user_id ))}
        case MembershipActionTypes.REMOVE_REQUEST_ERROR:
            return {...state,
                loading: { removeRequestLoading: false },
                error: { removeRequestError: { message: action.payload }}}

        case MembershipActionTypes.ADD_MEMBER:
            return {...state,
                error: { addMemberError: null },
                loading: { addMemberLoading: true }}
        case MembershipActionTypes.ADD_MEMBER_SUCCESS:
            return {...state,
                members: [...state.members, action.payload],
                loading: { addMemberLoading: false }}
        case MembershipActionTypes.ADD_MEMBER_ERROR:
            return {...state,
                error: { addMemberError: { message: action.payload }},
                loading: { addMemberLoading: false }}

        case MembershipActionTypes.FETCH_MEMBERS:
            return {...state,
                loading: { fetchMembersLoading: true },
                error: { fetchMembersError: null },
                members: [] }
        case MembershipActionTypes.FETCH_MEMBERS_SUCCESS:
            return {...state,
                loading: { fetchMembersLoading: false },
                members: [...state.members, ...action.payload]}
        case MembershipActionTypes.FETCH_MEMBERS_ERROR:
            return {...state,
                loading: { fetchMembersLoading: false },
                error: { fetchMembersError: { message: action.payload }}}

        default:
            return state
    }
}


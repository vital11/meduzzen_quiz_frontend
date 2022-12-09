
export enum MembershipTypes {
    REQUEST="request",
    INVITE="invite"
}

export interface IMembershipCreate {
    user_id: number
    company_id?: number
    membership_type: MembershipTypes
}

export interface IMembership extends IMembershipCreate{
    membership_id: number
}

export type MembershipProps = {
    membership: IMembership
}

export type MembershipParams = {
    membership_type: MembershipTypes
    company_id?: number
}

export interface IMember {
    m_id?: number
    user_id: number
    company_id: number
    is_admin: boolean
    email?: string
}

interface UserCompanies {
    user_id: number
}

interface CompanyMembers {
    company_id: number
}

export type IMemberParams = UserCompanies | CompanyMembers


interface MembershipErrorMessage {
    message: string
    detail?: string
}

export interface MembershipError {
    addInviteError?: MembershipErrorMessage | null
    addRequestError?: MembershipErrorMessage | null
    fetchInvitesError?: MembershipErrorMessage | null
    fetchRequestsError?: MembershipErrorMessage | null
    removeInviteError?: MembershipErrorMessage | null
    removeRequestError?: MembershipErrorMessage | null

    addMemberError?: MembershipErrorMessage | null
    fetchMembersError?: MembershipErrorMessage | null
    removeMemberError?: MembershipErrorMessage | null
    toggleMemberAdminRole?: MembershipErrorMessage | null
}

export interface MembershipLoading {
    addInviteLoading?: boolean
    addRequestLoading?: boolean
    fetchInvitesLoading?: boolean
    fetchRequestsLoading?: boolean
    removeInviteLoading?: boolean
    removeRequestLoading?: boolean

    addMemberLoading?: boolean
    fetchMembersLoading?: boolean
    removeMemberLoading?: boolean
    toggleMemberAdminRoleLoading?: boolean
}

export interface MembershipState {
    invites: IMembership[]
    requests: IMembership[]
    members: IMember[]
    member: IMember
    loading: MembershipLoading
    error: MembershipError
}

export enum MembershipActionTypes {

    ADD_INVITE = 'ADD_INVITE',
    ADD_INVITE_SUCCESS = 'ADD_INVITE_SUCCESS',
    ADD_INVITE_ERROR = 'ADD_INVITE_ERROR',

    ADD_REQUEST = 'ADD_REQUEST',
    ADD_REQUEST_SUCCESS = 'ADD_REQUEST_SUCCESS',
    ADD_REQUEST_ERROR = 'ADD_REQUEST_ERROR',

    FETCH_INVITES = 'FETCH_INVITES',
    FETCH_INVITES_SUCCESS = 'FETCH_INVITES_SUCCESS',
    FETCH_INVITES_ERROR = 'FETCH_INVITES_ERROR',

    FETCH_REQUESTS = 'FETCH_REQUESTS',
    FETCH_REQUESTS_SUCCESS = 'FETCH_REQUESTS_SUCCESS',
    FETCH_REQUESTS_ERROR = 'FETCH_REQUESTS_ERROR',

    REMOVE_INVITE = 'REMOVE_INVITE',
    REMOVE_INVITE_SUCCESS = 'REMOVE_INVITE_SUCCESS',
    REMOVE_INVITE_ERROR = 'REMOVE_INVITE_ERROR',

    REMOVE_REQUEST = 'REMOVE_REQUEST',
    REMOVE_REQUEST_SUCCESS = 'REMOVE_REQUEST_SUCCESS',
    REMOVE_REQUEST_ERROR = 'REMOVE_REQUEST_ERROR',

    ADD_MEMBER = 'ADD_MEMBER',
    ADD_MEMBER_SUCCESS = 'ADD_MEMBER_SUCCESS',
    ADD_MEMBER_ERROR = 'ADD_MEMBER_ERROR',

    FETCH_MEMBERS = 'FETCH_MEMBERS',
    FETCH_MEMBERS_SUCCESS = 'FETCH_MEMBERS_SUCCESS',
    FETCH_MEMBERS_ERROR = 'FETCH_MEMBERS_ERROR',

    REMOVE_MEMBER = 'REMOVE_MEMBER', 
    REMOVE_MEMBER_SUCCESS = 'REMOVE_MEMBER_SUCCESS',
    REMOVE_MEMBER_ERROR = 'REMOVE_MEMBER_ERROR',

    TOGGLE_MEMBER_ADMIN_ROLE = 'TOGGLE_MEMBER_ADMIN_ROLE',
    TOGGLE_MEMBER_ADMIN_ROLE_SUCCESS = 'TOGGLE_MEMBER_ADMIN_ROLE_SUCCESS',
    TOGGLE_MEMBER_ADMIN_ROLE_ERROR = 'TOGGLE_MEMBER_ADMIN_ROLE_ERROR',
}

interface AddInviteAction {
    type: MembershipActionTypes.ADD_INVITE
}

interface AddInviteSuccessAction {
    type: MembershipActionTypes.ADD_INVITE_SUCCESS
    payload: IMembership
}

interface AddInviteErrorAction {
    type: MembershipActionTypes.ADD_INVITE_ERROR
    payload: string
}

interface AddRequestAction {
    type: MembershipActionTypes.ADD_REQUEST
}

interface AddRequestSuccessAction {
    type: MembershipActionTypes.ADD_REQUEST_SUCCESS
    payload: IMembership
}

interface AddRequestErrorAction {
    type: MembershipActionTypes.ADD_REQUEST_ERROR
    payload: string
}

interface FetchInvitesAction {
    type: MembershipActionTypes.FETCH_INVITES
}

interface FetchInvitesSuccessAction {
    type: MembershipActionTypes.FETCH_INVITES_SUCCESS
    payload: IMembership[]
}

interface FetchInvitesErrorAction {
    type: MembershipActionTypes.FETCH_INVITES_ERROR
    payload: string
}

interface FetchRequestsAction {
    type: MembershipActionTypes.FETCH_REQUESTS
}

interface FetchRequestsSuccessAction {
    type: MembershipActionTypes.FETCH_REQUESTS_SUCCESS
    payload: IMembership[]
}

interface FetchRequestsErrorAction {
    type: MembershipActionTypes.FETCH_REQUESTS_ERROR
    payload: string
}

export type MembershipAction = 

    | AddInviteAction
    | AddInviteSuccessAction
    | AddInviteErrorAction

    | AddRequestAction
    | AddRequestSuccessAction
    | AddRequestErrorAction

    | FetchInvitesAction
    | FetchInvitesSuccessAction
    | FetchInvitesErrorAction

    | FetchRequestsAction
    | FetchRequestsSuccessAction
    | FetchRequestsErrorAction



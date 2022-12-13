
export interface ICompanyCreate {
    comp_name: string
    comp_description: string
    is_private: boolean
}

export type ICompanyUpdate = Partial<ICompanyCreate>

export interface ICompany extends ICompanyCreate {
    comp_id: number
    owner_id: number
}

export interface CompanyProps {
    id: number
}

interface CompanyErrorMessage {
    message: string
    detail?: string
}

export interface CompanyError {
    fetchCompaniesError?: CompanyErrorMessage
    fetchOwnerCompaniesError?: CompanyErrorMessage
    fetchCompanyError?: CompanyErrorMessage
    addCompanyError?: CompanyErrorMessage
    updateCompanyError?: CompanyErrorMessage
    removeCompanyError?: CompanyErrorMessage
}

export interface CompanyLoading {
    fetchCompaniesLoading?: boolean
    fetchOwnerCompaniesLoading?: boolean
    fetchCompanyLoading?: boolean
    addCompanyLoading?: boolean
    updateCompanyLoading?: boolean
    removeCompanyLoading?: boolean
}

export interface CompanyState {
    companies: ICompany[]
    ownerCompanies: ICompany[]
    company: ICompany
    loading: CompanyLoading
    error: CompanyError
}

export enum CompanyActionTypes {

    FETCH_COMPANIES = 'FETCH_COMPANIES',
    FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS',
    FETCH_COMPANIES_ERROR = 'FETCH_COMPANIES_ERROR',

    FETCH_OWNER_COMPANIES = 'FETCH_OWNER_COMPANIES',
    FETCH_OWNER_COMPANIES_SUCCESS = 'FETCH_OWNER_COMPANIES_SUCCESS',
    FETCH_OWNER_COMPANIES_ERROR = 'FETCH_OWNER_COMPANIES_ERROR',

    FETCH_COMPANY = 'FETCH_COMPANY',
    FETCH_COMPANY_SUCCESS = 'FETCH_COMPANY_SUCCESS',
    FETCH_COMPANY_ERROR = 'FETCH_COMPANY_ERROR',

    ADD_COMPANY = 'ADD_COMPANY',
    ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS',
    ADD_COMPANY_ERROR = 'ADD_COMPANY_ERROR',

    UPDATE_COMPANY = 'UPDATE_COMPANY',
    UPDATE_COMPANY_SUCCESS = 'UPDATE_COMPANY_SUCCESS',
    UPDATE_COMPANY_ERROR = 'UPDATE_COMPANY_ERROR',

    REMOVE_COMPANY = 'REMOVE_COMPANY',
    REMOVE_COMPANY_SUCCESS = 'REMOVE_COMPANY_SUCCESS',
    REMOVE_COMPANY_ERROR = 'REMOVE_COMPANY_ERROR',
}

interface FetchCompaniesAction {
    type: CompanyActionTypes.FETCH_COMPANIES
}

interface FetchCompaniesSuccessAction {
    type: CompanyActionTypes.FETCH_COMPANIES_SUCCESS
    payload: ICompany[]
}

interface FetchCompaniesErrorAction {
    type: CompanyActionTypes.FETCH_COMPANIES_ERROR
    payload: string
}

interface FetchOwnerCompaniesAction {
    type: CompanyActionTypes.FETCH_OWNER_COMPANIES
}

interface FetchOwnerCompaniesSuccessAction {
    type: CompanyActionTypes.FETCH_OWNER_COMPANIES_SUCCESS
    payload: ICompany[]
}

interface FetchOwnerCompaniesErrorAction {
    type: CompanyActionTypes.FETCH_OWNER_COMPANIES_ERROR
    payload: string
}

interface FetchCompanyAction {
    type: CompanyActionTypes.FETCH_COMPANY
}

interface FetchCompanySuccessAction {
    type: CompanyActionTypes.FETCH_COMPANY_SUCCESS
    payload: ICompany
}

interface FetchCompanyErrorAction {
    type: CompanyActionTypes.FETCH_COMPANY_ERROR
    payload: string
}

interface AddCompanyAction {
    type: CompanyActionTypes.ADD_COMPANY
}

interface AddCompanySuccessAction {
    type: CompanyActionTypes.ADD_COMPANY_SUCCESS
    payload: ICompany
}

interface AddCompanyErrorAction {
    type: CompanyActionTypes.ADD_COMPANY_ERROR
    payload: string
}

interface UpdateCompanyAction {
    type: CompanyActionTypes.UPDATE_COMPANY
}

interface UpdateCompanySuccessAction {
    type: CompanyActionTypes.UPDATE_COMPANY_SUCCESS
    payload: ICompany
}

interface UpdateCompanyErrorAction {
    type: CompanyActionTypes.UPDATE_COMPANY_ERROR
    payload: string
}

interface RemoveCompanyAction {
    type: CompanyActionTypes.REMOVE_COMPANY
}

interface RemoveCompanySuccessAction {
    type: CompanyActionTypes.REMOVE_COMPANY_SUCCESS
    payload: ICompany
}

interface RemoveCompanyErrorAction {
    type: CompanyActionTypes.REMOVE_COMPANY_ERROR
    payload: string
}

export type CompanyAction = 

    FetchCompaniesAction
    | FetchCompaniesSuccessAction
    | FetchCompaniesErrorAction

    | FetchOwnerCompaniesAction
    | FetchOwnerCompaniesSuccessAction
    | FetchOwnerCompaniesErrorAction

    | FetchCompanyAction
    | FetchCompanySuccessAction
    | FetchCompanyErrorAction

    | AddCompanyAction
    | AddCompanySuccessAction
    | AddCompanyErrorAction

    | UpdateCompanyAction
    | UpdateCompanySuccessAction
    | UpdateCompanyErrorAction

    | RemoveCompanyAction
    | RemoveCompanySuccessAction
    | RemoveCompanyErrorAction

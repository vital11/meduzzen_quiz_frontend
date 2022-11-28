import { IUser } from "./user";

export interface ICompany {
    comp_id?: number;
    comp_name: string;
    comp_description: string
    is_private: boolean;
    owner_id: number;
}

export interface ICompanyCreate {
    comp_name: string;
    comp_description: string
    is_private: boolean;
}

export interface ICompanyUpdate {
    comp_name?: string;
    comp_description?: string
    is_private?: boolean;
}

export interface CompaniesState {
    companies: ICompany[];
    loading: boolean;
    error: null | string;
}

export enum CompaniesActionTypes {
    FETCH_COMPANIES="FETCH_COMPANIES",
    FETCH_COMPANIES_SUCCESS="FETCH_COMPANIES_SUCCESS",
    FETCH_COMPANIES_ERROR="FETCH_COMPANIES_ERROR",
}

interface FetchCompaniesAction {
    type: CompaniesActionTypes.FETCH_COMPANIES;
}

interface FetchCompaniesSuccessAction {
    type: CompaniesActionTypes.FETCH_COMPANIES_SUCCESS;
    payload: ICompany[];
}

interface FetchCompaniesErrorAction {
    type: CompaniesActionTypes.FETCH_COMPANIES_ERROR;
    payload: string;
}

export type CompaniesAction = FetchCompaniesAction | FetchCompaniesSuccessAction | FetchCompaniesErrorAction


export enum MembershipTypes {
    REQUEST="request",
    INVITE="invite"
}

export interface ICompanyMembership {
    membership_id?: number
    user_id?: number
    company_id?: number
    membership_type?: MembershipTypes
}


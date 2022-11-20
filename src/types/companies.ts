
export interface ICompany {
    id?: number;
    name: string;
    description: string
    is_private: boolean;
    owner_id: number;
}

export interface ICompanyCreate {
    name: string;
    description: string
    is_private: boolean;
}

export interface ICompanyUpdate {
    name?: string;
    description?: string
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



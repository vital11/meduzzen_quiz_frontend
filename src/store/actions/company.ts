import { AxiosError } from "axios"
import { Dispatch } from "redux"
import { companyAPI } from "../../api/companyAPI"
import { CompanyAction, CompanyActionTypes, ICompanyCreate, ICompanyUpdate } from "../../types/company"


export const fetchCompanies = () => {
    return async (dispatch: Dispatch<CompanyAction>) => {
        try {
            dispatch({ type: CompanyActionTypes.FETCH_COMPANIES })
            const data = companyAPI.readCompanies()
            dispatch({
                type: CompanyActionTypes.FETCH_COMPANIES_SUCCESS,
                payload: await data })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: CompanyActionTypes.FETCH_COMPANIES_ERROR, 
                payload: error.message })
        }
    }
}

export const fetchCompany = (id: number) => {
    return async (dispatch: Dispatch<CompanyAction>) => {
        try {
            dispatch({ type: CompanyActionTypes.FETCH_COMPANY })
            const data = companyAPI.readCompany(id)
            dispatch({
                type: CompanyActionTypes.FETCH_COMPANY_SUCCESS,
                payload: await data })
        } catch (e: any) {
            const error = e as AxiosError
            dispatch({
                type: CompanyActionTypes.FETCH_COMPANY_ERROR, 
                payload: error.message })
        }
    }
}

export const addCompany = (data: ICompanyCreate) => {
    return async (dispatch: Dispatch<CompanyAction>) => {
        try {
            dispatch({ type: CompanyActionTypes.ADD_COMPANY })
            const company = companyAPI.createCompany(data)
            dispatch({
                type: CompanyActionTypes.ADD_COMPANY_SUCCESS,
                payload: await company })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: CompanyActionTypes.ADD_COMPANY_ERROR, 
                payload: error.message })
        }
    }
}

export const updateCompany = (id: number, data: ICompanyUpdate) => {
    return async (dispatch: Dispatch<CompanyAction>) => {
        try {
            dispatch({ type: CompanyActionTypes.UPDATE_COMPANY })
            const companyData = companyAPI.updateCompany(id, data)
            dispatch({
                type: CompanyActionTypes.UPDATE_COMPANY_SUCCESS,
                payload: await companyData })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: CompanyActionTypes.UPDATE_COMPANY_ERROR, 
                payload: error.message })
        }
    }
}

export const removeCompany = (id: number) => {
    return async (dispatch: Dispatch<CompanyAction>) => {
        try {
            dispatch({ type: CompanyActionTypes.REMOVE_COMPANY })
            const data = companyAPI.deleteCompany(id)
            dispatch({
                type: CompanyActionTypes.REMOVE_COMPANY_SUCCESS,
                payload: await data })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: CompanyActionTypes.REMOVE_COMPANY_ERROR, 
                payload: error.message })
        }
    }
}

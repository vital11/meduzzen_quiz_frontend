import { Dispatch } from "redux"
import { companyAPI } from "../../api/companyAPI";
import { CompaniesAction, CompaniesActionTypes } from "../../types/companies";


export const fetchCompanies = () => {
    return async (dispatch: Dispatch<CompaniesAction>) => {
        try {
            dispatch({type: CompaniesActionTypes.FETCH_COMPANIES})
            const data = companyAPI.readCompanies()
            dispatch({
                type: CompaniesActionTypes.FETCH_COMPANIES_SUCCESS,
                payload: await data})
        } catch (e) {
            dispatch({
                type: CompaniesActionTypes.FETCH_COMPANIES_ERROR, 
                payload: 'Error occurred while loading companies.'})
        }
    }
}



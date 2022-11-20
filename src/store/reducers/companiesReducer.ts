import { CompaniesAction, CompaniesActionTypes, CompaniesState, ICompany } from '../../types/companies'
import { IUser } from '../../types/user'


const initialCompaniesState: CompaniesState = {
    companies: [] as ICompany[],
    loading: false,
    error: null,
}

export const companiesReducer = (state = initialCompaniesState, action: CompaniesAction): CompaniesState => {
    switch (action.type) {
        case CompaniesActionTypes.FETCH_COMPANIES:
            return {loading: true, error: null, companies: []}
        case CompaniesActionTypes.FETCH_COMPANIES_SUCCESS:
            return {loading: false, error: null, companies: action.payload}
        case CompaniesActionTypes.FETCH_COMPANIES_ERROR:
            return {loading: false, error: action.payload, companies: []}
        default:
            return state
    }
}


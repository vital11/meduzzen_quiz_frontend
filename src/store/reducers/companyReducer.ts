import { CompanyAction, CompanyActionTypes, CompanyError, CompanyLoading, CompanyState, ICompany } from '../../types/company'


const initialState: CompanyState = {
    companies: [],
    ownerCompanies: [],
    company: {} as ICompany,
    loading: {},
    error: {},
}

export const companyReducer = (state = initialState, action: CompanyAction): CompanyState => {
    switch (action.type) {

        case CompanyActionTypes.FETCH_COMPANIES:
            return {...state,
                error: { fetchOwnerCompaniesError: undefined },
                loading: { fetchOwnerCompaniesLoading: true }}    
        case CompanyActionTypes.FETCH_COMPANIES_SUCCESS:
            return {...state,
                companies: action.payload,
                loading: { fetchOwnerCompaniesLoading: false }}
        case CompanyActionTypes.FETCH_COMPANIES_ERROR:
            return {...state,
                error: { fetchOwnerCompaniesError: { message: action.payload }},
                loading: { fetchOwnerCompaniesLoading: false }}

        case CompanyActionTypes.FETCH_OWNER_COMPANIES:
            return {...state,
                error: { fetchCompaniesError: undefined },
                loading: { fetchCompaniesLoading: true }}    
        case CompanyActionTypes.FETCH_OWNER_COMPANIES_SUCCESS:
            return {...state,
                ownerCompanies: action.payload,
                loading: { fetchCompaniesLoading: false }}
        case CompanyActionTypes.FETCH_OWNER_COMPANIES_ERROR:
            return {...state,
                error: { fetchCompaniesError: { message: action.payload }},
                loading: { fetchCompaniesLoading: false }}

        case CompanyActionTypes.FETCH_COMPANY:
            return {...state,
                error: { fetchCompanyError: undefined },
                loading: { fetchCompanyLoading: true }}
        case CompanyActionTypes.FETCH_COMPANY_SUCCESS:
            return {...state,
                company: action.payload,
                loading: { fetchCompanyLoading: false }}
        case CompanyActionTypes.FETCH_COMPANY_ERROR:
            return {...state,
                error: { fetchCompanyError: { message: action.payload }},
                loading: { fetchCompanyLoading: false }}

        case CompanyActionTypes.ADD_COMPANY:
            return {...state,
                error: { addCompanyError: undefined },
                loading: { addCompanyLoading: true }}  
        case CompanyActionTypes.ADD_COMPANY_SUCCESS:
            return {...state,
                companies: [...state.companies, action.payload],
                loading: { addCompanyLoading: false }}
        case CompanyActionTypes.ADD_COMPANY_ERROR:
            return {...state,
                error: { addCompanyError: { message: action.payload }},
                loading: { addCompanyLoading: false }}

        case CompanyActionTypes.UPDATE_COMPANY:
            return {...state,
                error: { updateCompanyError: undefined },
                loading: { updateCompanyLoading: true }}  
        case CompanyActionTypes.UPDATE_COMPANY_SUCCESS:
            return {...state,
                company: action.payload,
                loading: { updateCompanyLoading: false }}
        case CompanyActionTypes.UPDATE_COMPANY_ERROR:
            return {...state,
                error: { updateCompanyError: { message: action.payload }},
                loading: { updateCompanyLoading: false }}

        case CompanyActionTypes.REMOVE_COMPANY:
            return {...state,
                error: { removeCompanyError: undefined },
                loading: { removeCompanyLoading: true }}  
        case CompanyActionTypes.REMOVE_COMPANY_SUCCESS:
            return {...state,
                companies: state.companies.filter(company => company.comp_id !== action.payload.comp_id),
                loading: { removeCompanyLoading: false }}
        case CompanyActionTypes.REMOVE_COMPANY_ERROR:
            return {...state,
                error: { removeCompanyError: { message: action.payload }},
                loading: { removeCompanyLoading: false }}

        default:
            return state
    }
}

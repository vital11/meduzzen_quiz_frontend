import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"
import { ICompany } from "../types/company"
import RequestCreate from "./membership/RequestCreate"
import PageTitle from "./UI/PageTitle"
import { ErrorMessage, Loader } from "./UI/Messages"


const CompanyList: React.FC = () => {
    const { companies, company, error: { fetchCompaniesError }, loading: { fetchCompaniesLoading } } = useTypedSelector((state) => state.company)
    const { fetchCompanies } = useActions()

    useEffect(() => {
        fetchCompanies()
    }, [company])

    return (
        <>
            { fetchCompaniesLoading && <Loader /> }
            { fetchCompaniesError && <ErrorMessage error={ fetchCompaniesError.message } /> }

            <PageTitle title="Companies"/>
            <div className="w-full relative">
                <div className="grid grid-cols-6 gap-4 p-2 font-medium bg-gray-200">
                    <span className="p-4">ID</span>
                    <span className="p-4">Name</span>
                    <span className="p-4">Description</span>
                    <span className="p-4">Is Private</span>
                    <span className="p-4">Owner ID</span>
                    <span className="p-4 absolute right-2"></span>
                </div>
                { companies.map((company: ICompany) => (
                    <div 
                        key={company.comp_id} 
                        className="grid grid-cols-6 gap-4 p-2 bg-white hover:bg-gray-50"
                    >   
                        <span className="p-4">{ company.comp_id }</span>
                        <span className="p-4 text-amber-400">   
                            <Link to={`/companies/${company.comp_id}`}>{ company.comp_name }</Link>
                        </span>
                        <span className="p-4">{ company.comp_description }</span>
                        <span className="p-4">{ String(company.is_private) }</span>
                        <span className="p-4">{ company.owner_id }</span>
                        <span className="px-5 flex justify-end">
                            <RequestCreate id={`${company.comp_id}`} />
                        </span>
                    </div>
                )) }
            </div>
        </>
    )
}

export default CompanyList

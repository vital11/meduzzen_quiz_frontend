import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { NavLink } from "react-router-dom";
import PageTitle from "./UI/PageTitle";
import { ICompany } from "../types/companies";

const CompanyList: React.FC = () => {
    const { currentUser } = useTypedSelector((state) => state.user)
    const { companies, error, loading } = useTypedSelector((state) => state.companies)
    const { fetchCompanies } = useActions()

    useEffect(() => {
        fetchCompanies()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>
            <PageTitle title="Companies"/>
            <div className="w-full relative">
                <div className="grid grid-cols-6 gap-4 p-2 font-medium bg-gray-200">
                    <span className="p-4">ID</span>
                    <span className="p-4">Name</span>
                    <span className="p-4">Description</span>
                    <span className="p-4">Is Private</span>
                    <span className="p-4">Owner ID</span>
                    <span className="p-4 absolute right-0">Edit</span>
                </div>
                { companies.map((company: ICompany) => (
                    company?.is_private && currentUser.id !== company?.owner_id
                    ? null
                    : <div 
                        key={company.id} 
                        className="grid grid-cols-6 gap-4 p-2 bg-white hover:bg-gray-50"
                    >   
                        <span className="p-4">{ company.id }</span>
                        <span className="p-4 text-amber-400"><NavLink to={`/companies/${company.id}`}>{ company.name }</NavLink></span>
                        <span className="p-4">{ company.description }</span>
                        <span className="p-4">{ String(company.is_private) }</span>
                        <span className="p-4">{ company.owner_id }</span>
                        <span className="p-4 absolute right-0">Edit</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CompanyList


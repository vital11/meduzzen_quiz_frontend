import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { NavLink } from "react-router-dom";
import PageTitle from "./UI/PageTitle";
import { ICompany } from "../types/companies";
import ButtonDropleft from "./UI/ButtonDropleft";
import CompanyRequestCreate from "./companies/CompanyRequestCreate";


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
                    <span className="p-4 absolute right-2"></span>
                </div>
                { companies.map((company: ICompany) => (
                    <div 
                        key={company.comp_id} 
                        className="grid grid-cols-6 gap-4 p-2 bg-white hover:bg-gray-50"
                    >   
                        <span className="p-4">{ company.comp_id }</span>
                        <span className="p-4 text-amber-400"><NavLink to={`/companies/${company.comp_id}`}>{ company.comp_name }</NavLink></span>
                        <span className="p-4">{ company.comp_description }</span>
                        <span className="p-4">{ String(company.is_private) }</span>
                        <span className="p-4">{ company.owner_id }</span>
                        <span className="px-5 absolute right-2">
                            <CompanyRequestCreate id={`${company.comp_id}`} />
                        </span>
                    </div>
                )) }
            </div>
        </>
    )
}

export default CompanyList


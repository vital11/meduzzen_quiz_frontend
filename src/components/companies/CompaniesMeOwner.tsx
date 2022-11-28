import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { AxiosError } from "axios"

import { companyAPI } from "../../api/companyAPI"
import { ICompany } from "../../types/companies"
import { ErrorMessage, Loader } from "../UI/Messages"


export default function CompaniesMeOwner() {
    const [companies, setCompanies] = useState<ICompany[]>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchCompaniesMeOwner()
    }, [])

    const fetchCompaniesMeOwner = async () => {
        try {
            setError('')
            setLoading(true)
            const data = await companyAPI.readCompaniesMeOwner()
            setCompanies(data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            const error = e as AxiosError
            setError(error.message)
        }
    }

    return (
        <>
            { loading && <Loader /> }
            { error && <ErrorMessage error={error} /> }

            <div className="flex items-center w-full h-16 px-5 pb-2 font-medium tracking-wide bg-gray-100"> Owner Companies </div>

            <div className="w-full relative">
                <>
                    <div className="grid grid-cols-6 gap-4 p-2 font-medium bg-gray-200">
                        <span className="p-4">ID</span>
                        <span className="p-4">Name</span>
                        <span className="p-4">Description</span>
                        <span className="p-4">Is Private</span>
                        <span className="p-4">Owner ID</span>
                        <span className="p-4 absolute right-0">Edit</span>
                    </div>
                    { companies && companies.map((company: ICompany) => (
                        <div 
                            key={company.comp_id} 
                            className="grid grid-cols-6 gap-4 p-2 bg-white hover:bg-gray-50"
                        >   
                            <span className="p-4">{ company.comp_id }</span>
                            <span className="p-4 text-amber-400"><NavLink to={`/companies/${company.comp_id}`}>{ company.comp_name }</NavLink></span>
                            <span className="p-4">{ company.comp_description }</span>
                            <span className="p-4">{ String(company.is_private) }</span>
                            <span className="p-4">{ company.owner_id }</span>
                            <span className="p-4 absolute right-0">Edit</span>
                        </div>
                    ))}
                </>
            </div>
        </>
    )
}



import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { ICompany } from "../../types/company"
import { ErrorMessage, Loader } from "../UI/Messages"


interface OwnerCompaniesProps { id?: number }

export default function OwnerCompanies({ id }: OwnerCompaniesProps) {
    const { ownerCompanies, companies, 
        error: { fetchOwnerCompaniesError }, loading: { fetchOwnerCompaniesLoading }
    } = useTypedSelector((state) => state.company)

    const { fetchOwnerCompanies } = useActions()

    useEffect(() => {
        fetchOwnerCompanies(id)
    }, [companies])

    return (
        <>
            { fetchOwnerCompaniesLoading && <Loader /> }
            { fetchOwnerCompaniesError && <ErrorMessage error={ fetchOwnerCompaniesError.message } /> }

            <div className="flex items-center w-full h-16 px-5 pb-2 font-medium tracking-wide bg-gray-100"> Owner Companies </div>

            <div className="w-full relative">
                <>
                    <div className="grid grid-cols-6 gap-4 p-2 font-medium bg-gray-200">
                        <span className="p-4">ID</span>
                        <span className="p-4">Name</span>
                        <span className="p-4">Description</span>
                        <span className="p-4">Is Private</span>
                        <span className="p-4">Owner ID</span>
                    </div>
                    { ownerCompanies && ownerCompanies.map((company: ICompany) => (
                        <div 
                            key={company.comp_id} 
                            className="grid grid-cols-6 gap-4 p-2 bg-white hover:bg-gray-50"
                        >   
                            <span className="p-4">{ company.comp_id }</span>
                            <span className="p-4 text-amber-400"><NavLink to={`/companies/${company.comp_id}`}>{ company.comp_name }</NavLink></span>
                            <span className="p-4">{ company.comp_description }</span>
                            <span className="p-4">{ String(company.is_private) }</span>
                            <span className="p-4">{ company.owner_id }</span>
                        </div>
                    ))}
                </>
            </div>
        </>
    )
}

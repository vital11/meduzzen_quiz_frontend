import { useEffect } from "react"
import { CompanyProps } from "../../types/company"
import { ErrorMessage, Loader } from "../UI/Messages"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"


export default function Company({ id }: CompanyProps) {
    const { company, error: { fetchCompanyError }, loading: { fetchCompanyLoading } } = useTypedSelector((state) => state.company)
    const { fetchCompany } = useActions()

    useEffect(() => {
        fetchCompany(id)
    }, [])

    return (
        <>
            { fetchCompanyLoading && <Loader /> }
            { fetchCompanyError && <ErrorMessage error={ fetchCompanyError.message } /> }

            <div className="p-10 rounded-2xl bg-grey-200 space-y-8">
                <p className="mx-auto text-center font-medium tracking-wide cursor-pointer">
                    Company Info
                </p>
                <div className="flex justify-between">
                    <span> Name </span> 
                    <span>{ company.comp_name }</span>
                </div>  
                <div className="flex justify-between">
                    <span> Description </span>
                    <span>{ company.comp_description }</span>
                </div>
                <div className="flex justify-between">
                    <span> Is Private </span>
                    <span>{ String( company.is_private) }</span>
                </div>
                <div className="flex justify-between">
                    <span> Owner ID </span>
                    <span>{ company.owner_id }</span>
                </div>
                <div className="flex justify-between">
                    <span> ID </span>
                    <span>{ company.comp_id }</span>
                </div>
            </div>
        </>
	)
}

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AxiosError } from "axios"

import { ICompany } from "../../types/companies"
import { companyAPI } from "../../api/companyAPI"
import { ErrorMessage, Loader } from "../UI/Messages"


interface Params {
    id: string;
}

export default function Company() {
    const {id} = useParams<keyof Params>() as Params
    const [company, setCompany] = useState<ICompany>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchCompany()
    }, [])

    async function fetchCompany() {
        try {
            setError('')
            setLoading(true)
            const data = await companyAPI.readCompany(id)
            setCompany(data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    return (
        <>
            { loading && <Loader /> }
            { error && <ErrorMessage error={error} /> }
       
            <div className="p-10 rounded-2xl bg-grey-200 space-y-8">
                <p className="mx-auto text-center font-medium tracking-wide cursor-pointer">
                    Company Info
                </p>
                <div className="flex justify-between">
                    <span> Name </span> 
                    <span>{ company?.name }</span>
                </div>  
                <div className="flex justify-between">
                    <span> Description </span>
                    <span>{ company?.description }</span>
                </div>
                <div className="flex justify-between">
                    <span> Is Private </span>
                    <span>{ String( company?.is_private) }</span>
                </div>
                <div className="flex justify-between">
                    <span> Owner ID </span>
                    <span>{ company?.owner_id }</span>
                </div>
                <div className="flex justify-between">
                    <span> ID </span>
                    <span>{ company?.id }</span>
                </div>
            </div>
        </>
	)
}

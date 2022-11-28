import { useState } from "react"
import { AxiosError } from "axios"

import { companyAPI } from "../../api/companyAPI"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { MembershipTypes } from "../../types/companies"
import { ErrorMessage, Loader } from "../UI/Messages"


interface CompanyRequestCreateProps { id: string }


export default function CompanyRequestCreate({ id }: CompanyRequestCreateProps) {
    const { currentUser } = useTypedSelector((state) => state.user)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const sendRequest = async () => {
        try {
            setError('')
            setLoading(true)
            companyAPI.createMembership({
                user_id: currentUser.id,
                company_id: Number(id),
                membership_type: MembershipTypes.REQUEST
            })
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

            <button
                type="submit" 
                className="px-5 py-3 rounded-xl text-lg font-medium text-white bg-gray-200 hover:bg-emerald-300 active:bg-emerald-500 outline-none"
                onClick={ sendRequest }
            >   Join
            </button>
        </>
	)
}


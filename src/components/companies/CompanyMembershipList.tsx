import { useEffect, useState } from "react"
import { AxiosError } from "axios"

import { companyAPI } from "../../api/companyAPI"
import { ICompanyMembership, MembershipTypes } from "../../types/companies"
import { ErrorMessage, Loader } from "../UI/Messages"


interface CompanyMembershipListProps {
	title: string
    params: ICompanyMembership
}


export default function CompanyMembershipList({ title, params }: CompanyMembershipListProps) {
    const [memberships, setMemberships] = useState<ICompanyMembership[]>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchMemberships()
    }, [])

    const fetchMemberships = async () => {
        try {
            setError('')
            setLoading(true)
            const data = await companyAPI.readMemberships(params)
            setMemberships(data)
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

            <div className="flex items-center w-full h-16 px-5 pb-2 font-medium tracking-wide bg-gray-100"> { title } </div>

            <div className="w-full relative">
                <>
                    <div className="grid grid-cols-6 gap-4 p-2 font-medium bg-gray-200">
                        <span className="p-4">ID</span>
                        <span className="p-4">User ID</span>
                        <span className="p-4">Company ID</span>
                        <span className="p-4">Membership Type</span>
                        <span className="p-4 col-span-2 flex justify-end"></span>
                    </div>
                    { memberships && memberships.map((membership: ICompanyMembership) => (
                        <div 
                            key={membership.membership_id} 
                            className="grid grid-cols-6 gap-4 p-2 bg-white hover:bg-gray-50"
                        >   
                            <span className="p-4">{ membership.membership_id }</span>
                            <span className="p-4">{ membership.user_id }</span>
                            <span className="p-4">{ membership.company_id }</span>
                            <span className="p-4">{ membership.membership_type }</span>
                            <span className="p-4 col-span-2 flex justify-end gap-10">
                                <button>Delete...</button>
                                { params.membership_type === 'invite' && <button>Accept...</button> }
                            </span>
                        </div>
                    ))}
                </>
            </div>
        </>
    )
}



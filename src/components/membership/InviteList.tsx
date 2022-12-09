import { useEffect } from "react"

import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"
import { IMembership, MembershipParams } from "../../types/membership"
import MembershipDelete from "./MembershipDelete"
import MembershipAccept from "./MembershipAccept"
import { ErrorMessage, Loader } from "../UI/Messages"


interface MembershipListProps {
	title: string
    params: MembershipParams
}

export default function InviteList({ title, params }: MembershipListProps) {
    const { invites, error: { fetchInvitesError }, loading: { fetchInvitesLoading }} = useTypedSelector((state) => state.membership)
    const { fetchInvites } = useActions()

    const currentInvites = () => {
        return ( params.company_id
            ? invites.filter(invite => (params.company_id === invite.company_id))
            : invites )
    }

    useEffect(() => {
        fetchInvites(params)
    }, [])

    return (
        <>
            { fetchInvitesLoading && <Loader /> }
            { fetchInvitesError && <ErrorMessage error={ fetchInvitesError.message} /> }

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
                    { currentInvites().map((membership: IMembership) => (
                        <div 
                            key={membership.membership_id} 
                            className="grid grid-cols-6 gap-4 p-2 bg-white hover:bg-gray-50"
                        >   
                            <span className="p-4">{ membership.membership_id }</span>
                            <span className="p-4">{ membership.user_id }</span>
                            <span className="p-4">{ membership.company_id }</span>
                            <span className="p-4">{ membership.membership_type }</span>
                            <span className="col-span-2 flex justify-end gap-5 px-5">
                                { params.membership_type === 'request' && <MembershipAccept membership={ membership }/> }
                                <MembershipDelete membership={ membership }/>
                            </span>
                        </div>
                    ))}
                </>
            </div>
        </>
    )
}

